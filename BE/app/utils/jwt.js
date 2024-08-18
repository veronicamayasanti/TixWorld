import jwt from 'jsonwebtoken';
import {jwtSecret, jwtExpiration} from '../config.js';

export const createJWT = ({ payload }) => {
    const token = jwt.sign(payload, jwtSecret, {
        expiresIn: jwtExpiration
    });
    return token;
}

export const isTokenValid = ({ token }) => {
    return jwt.verify(token, jwtSecret);
}