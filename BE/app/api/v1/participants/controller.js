import { signupParticipant, activateParticipant, signinParticipant, getAllEvents, getOneEvents, getAllOrders } from "../../../services/mongoose/participants.js";
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

const signin = async (req, res, next) => {
    try {
        const result = await signinParticipant(req);
        res.status(StatusCodes.OK).json({
            data: { token: result}
        });
    } catch (error) {
        next(error);
    }
};

const getAlllandingPage = async (req, res, next) => {
    try {
        const result = await getAllEvents(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
};

const getDashboard = async (req, res, next) => {
    try {
        const result = await getAllOrders(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
};

const getDetailLandingPage = async (req, res, next) => {
    try {
        const result = await getOneEvents(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
}

export { signup, activeParticipant, signin, getAlllandingPage, getDashboard, getDetailLandingPage }