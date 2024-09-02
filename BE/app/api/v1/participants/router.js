import express from 'express';
const router = express.Router();
import { signup, activeParticipant, signin, getAlllandingPage, getDashboard, getDetailLandingPage }  from './controller.js';
import {authenticateParticipant} from '../../../middlewares/auth.js';

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.put('/active', activeParticipant);
router.get('/events', getAlllandingPage);
router.get('/events/:id', getDetailLandingPage);
router.get('/orders', authenticateParticipant,getDashboard);


export default router