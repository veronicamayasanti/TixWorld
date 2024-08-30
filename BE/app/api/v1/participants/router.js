import express from 'express';
const router = express.Router();
import  {signup, activeParticipant}  from './controller.js';

router.post('/auth/signup', signup);
router.put('/active', activeParticipant);


export default router