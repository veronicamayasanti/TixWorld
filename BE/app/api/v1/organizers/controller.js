import { StatusCodes } from "http-status-codes";
import { createOrganizer, createUsers, getAllUsers } from "../../../services/mongoose/users.js";

const createCMSorganizer = async (req, res, next) => {
    try {
        const result = await createOrganizer(req);
        res.status(StatusCodes.CREATED).json({
            message: "Organizer created successfully",
            data: result,
        });
    } catch (error) {
        console.error("Error creating organizer:", error.message);
        next(error);
    }
};

const createCMSUser = async (req, res, next) => {
    try {
        const result = await createUsers(req);
        res.status(StatusCodes.CREATED).json({
            message: "User created successfully",
            data: result,
        });
    } catch (error) {
        console.error("Error creating user:", error.message);
        next(error);
    }
};

const getCMSUsers = async (req, res, next) => {
    try {
        const result = await getAllUsers(req);
        res.status(StatusCodes.OK).json({
            message: "Users fetched successfully",
            data: result,
        });
    } catch (error) {
        console.error("Error fetching users:", error.message);
        next(error);
    }
};

export { createCMSorganizer, createCMSUser, getCMSUsers };