import express from 'express';
const router = express.Router();
import { createCMSorganizer, createCMSUser, getCMSUsers } from './controller.js';

import { authenticateUser, authorizeRoles } from '../../../middlewares/auth.js';

router.post('/organizers', authenticateUser, authorizeRoles('owner'), createCMSorganizer)
router.post('/users', authenticateUser, authorizeRoles('organizer'), createCMSUser)
router.get('/users', authenticateUser, authorizeRoles('owner'), getCMSUsers)


export default router 