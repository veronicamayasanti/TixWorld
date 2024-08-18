import { StatusCodes } from "http-status-codes";
import createOrganizer from "../../../services/mongoose/users.js";

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

export { createCMSorganizer };