import { signupParticipant, activateParticipant } from "../../../services/mongoose/participants.js";
import { StatusCodes } from "http-status-codes";

const signup = async (req, res, next) => {
    try {
        const result = await signupParticipant(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
};

const activeParticipant = async (req, res, next) => {
    try {
        const result = await activateParticipant(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
};

export {signup, activeParticipant}