import  UnauthenticatedError from '../errors/unauthenticated.js';
import UnauthorizedError from '../errors/unauthorized.js';
import {isTokenValid} from '../utils/jwt.js';


const authenticateUser = async (req, res, next) => {
    try {
        let token;
        // checking header
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer')) {
            token = authHeader.split(' ')[1];
        }

        if (!token) {
            throw new UnauthenticatedError('Authentication Invalid');
        }
        const payload = isTokenValid({ token });

        req.user = {
            email: payload.email,
            name: payload.name,
            id: payload.userId,
            role: payload.role,
            organizer: payload.organizer
        };
        next();
    } catch (error) {
        next(error);
    };
    };


    const authorizeRoles = (...roles) => {
        return (req, res, next) => {
            if (!roles.includes(req.user.role)) {
                throw new UnauthorizedError('Unauthorized to access this route');
            }
            next();
        };
    };


    export { authenticateUser, authorizeRoles };