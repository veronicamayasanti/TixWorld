import createImages from '../../../services/mongoose/images.js'
import { StatusCodes } from 'http-status-codes'

const create = async (req, res, next) => {
    try {
        console.log('ini req file ',req.file);
        const result = await createImages(req);
        res.status(StatusCodes.CREATED).json({
            message: 'Image created successfully',
            data: result
        });
        console.log(result);
        
    } catch (error) {
        console.error("Error creating image:", error.message);
        next(error);
    }
}

export default create;