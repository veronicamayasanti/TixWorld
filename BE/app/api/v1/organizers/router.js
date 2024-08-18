import express from 'express';
const router = express.Router();
import {createCMSorganizer} from './controller.js';

router.post('/organizers', createCMSorganizer)


export default router