import signin from "../../../services/mongoose/auth.js";
import { StatusCodes } from "http-status-codes";

const signinCms = async (req, res, next) => {
    try {
        const result = await signin(req);
        res.status(StatusCodes.OK).json({
            data : {
                token: result
            }
        });
    } catch (error) {
        next(error);

    }
};
export default signinCms