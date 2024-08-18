import express from 'express';
const router = express.Router();
import  signinCms  from './controller.js';

router.post('/auth/signin', signinCms)


export default router