import Users from "../../api/v1/users/model.js";
import BadRequestError from "../../errors/bad-request.js";
import UnauthorizedError from "../../errors/unauthorized.js";
import { createJWT } from "../../utils/jwt.js";
import {createTokenUsers} from "../../utils/createTokenUser.js";

const signin = async (req) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new BadRequestError("Please provide email and password");
    }

    const result = await Users.findOne({ email : email });

    if (!result) {
        throw new UnauthorizedError("Invalid credentials");
    }

    const isPasswordCorrect = await result.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new UnauthorizedError("Invalid credentials");
    }

    const token = createJWT({ payload: createTokenUsers(result) });
    return token;

    }


export default signin;