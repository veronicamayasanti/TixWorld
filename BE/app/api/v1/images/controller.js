import createImages from '../../../services/mongoose/images.js'
import { StatusCodes } from 'http-status-codes'

const create = async (req, res, next) => {
    try {
        console.log('req.body');
        console.log(req.body);
        const result = await createImages(req);
        res.status(StatusCodes.CREATED).json({ data: result });
    }
    catch (error) {
        next(error);
    }
}

export default create;