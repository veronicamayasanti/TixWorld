import express from 'express';
const router = express.Router();
import { signup, activeParticipant, signin }  from './controller.js';

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.put('/active', activeParticipant);


export default router