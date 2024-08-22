import express from 'express';
const router = express.Router();
import { create, index, find, update, destroy } from './controller.js';
import {
    authenticateUser,
    authorizeRoles
} from '../../../middlewares/auth.js'

router.get('/events', authenticateUser, authorizeRoles('organizer'), index)
router.get('/events/:id', authenticateUser, authorizeRoles('organizer'), find)
router.put('/events/:id', authenticateUser, authorizeRoles('organizer'), update)
router.delete('/events/:id', authenticateUser, authorizeRoles('organizer'), destroy)
router.post('/events', authenticateUser, authorizeRoles('organizer'), create)

export default router;