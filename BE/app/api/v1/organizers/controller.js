import { StatusCodes } from "http-status-codes";
import { createOrganizer, createUsers } from "../../../services/mongoose/users.js";



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

export { createCMSorganizer, createCMSUser };