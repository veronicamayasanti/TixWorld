import Users from '../../api/v1/users/model.js';
import Organizers from '../../api/v1/organizers/model.js';
import BadRequestError from '../../errors/bad-request.js';

const createOrganizer = async (req) => {
    const { organizer, role, email, password, confirmPassword, name } = req.body;

    if (password !== confirmPassword) {
        throw new BadRequestError('Password and confirm password not match');
    }

    const result = await Organizers.create({ organizer });

    const users = await Users.create({
        name,
        email,
        password,
        role,
        organizer: result._id
    });
    delete users._doc.password;

    return users;
};


export default createOrganizer 
