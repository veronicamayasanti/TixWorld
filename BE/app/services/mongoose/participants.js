import Participants from "../../api/v1/participants/model.js";
import Events from "../../api/v1/events/model.js";
import Orders from "../../api/v1/orders/model.js";
import { createTokenParticipant, } from "../../utils/createTokenUser.js"
import otpMail from "../mail/index.js"
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


const activateParticipant = async (req) => {
    const { email, otp } = req.body;
    const check = await Participants.findOne({ email });

    if (!check) {
        throw new NotFoundError(`Participant with email ${email} not found`);
    }

    if (check && check.otp !== otp) {
        throw new BadRequestError('Invalid OTP');
    }

    const result = await Participants.findOneAndUpdate(check._id, { status: 'aktif' }, { new: true });
    delete result._doc.password;
    delete result._doc.otp;
    return result;
}

const signinParticipant = async (req) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError("Please provide email and password");
    }

    const result = await Participants.findOne({ email: email });

    if (!result) {
        throw new UnauthenticatedError("Invalid credentials");
    }

    if (result.status !== 'tidak aktif') {
        throw new UnauthenticatedError("Please activate your account");
    }

    const isPasswordCorrect = await result.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new UnauthenticatedError("Invalid credentials");
    }

    const token = createJWT({ payload: createTokenParticipant(result) });
    return token;
}

const getAllEvents = async (req) => {
    const result = await Events.find({statusEvent: 'Published'})
    .populate('category')
    .populate('image')
    .select('_id title date tickts veneueName')
    return result;
}

const getOneEvents = async (req) => {
    const {id} = req.params
    const result = await Events.findOne({ _id: id })
    .populate('category')
    .populate('talent')
    .populate('image');

    if (!result) throw new NotFoundError(`Events with id ${req.params.id} not found`);
    return result
}

const getAllOrders = async (req) => {
    const result = await Orders.find({ participant: req.user._id })
    
    return result
}

export { signupParticipant, activateParticipant, signinParticipant, getAllEvents, getOneEvents, getAllOrders }