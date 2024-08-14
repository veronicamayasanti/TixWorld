import express from 'express';
const router = express.Router();
import   create  from './controller.js';
import upload from '../../../middlewares/multer.js';

router.post('/images', upload.single('foto'), create)


export default router