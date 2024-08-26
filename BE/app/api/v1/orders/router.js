import express from 'express';
const router = express.Router();
import { index } from './controller.js';
import {
    authenticateUser,
    authorizeRoles
} from '../../../middlewares/auth.js'

router.get('/orders', authenticateUser, authorizeRoles('organizer', 'admin', 'owner'), index)

export default router