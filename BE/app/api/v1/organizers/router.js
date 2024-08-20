import express from 'express';
const router = express.Router();
import {createCMSorganizer, createCMSUser} from './controller.js';

import { authenticateUser, authorizeRoles } from '../../../middlewares/auth.js';

router.post('/organizers', createCMSorganizer)
router.post('/users', authenticateUser, createCMSUser)


export default router