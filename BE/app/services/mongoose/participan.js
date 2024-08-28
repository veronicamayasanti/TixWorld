import Participants from "../../api/v1/participants/model";
import NotFoundError from '../../errors/not-found.js';
import BadRequestError from '../../errors/bad-request.js';
import UnauthenticatedError from '../../errors/unauthenticated.js';

const signupParticipant = async (req) => {
    const { firstName, lastName, email, password, role } = req.body;

    // jika email dan status tidak aktif
    let result = await Participants.findOne({ email, status: 'tidak aktif' });

    if (result) {
        result.firstName = firstName;
        result.lastName = lastName;
        result.email = email;
        result.password = password;
        result.role = role;
        result.otp = Math.floor(Math.random() * 9999);

        await result.save();
    } else {
        result = await Participants.create({
            firstName,
            lastName,
            email,
            password,
            role,
            otp: Math.floor(Math.random() * 9999)
        });
    }
    await otpMail(email, result)

    delete result._doc.password;

    return result;
    }


export default signupParticipant