import express from 'express';
const router = express.Router();
import   create  from './controller.js';
import uploadMiddleware from '../../../middlewares/multer.js';

router.post('/img', uploadMiddleware.single('foto'), create)


export default router