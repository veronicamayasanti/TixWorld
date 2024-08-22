import express from 'express';
const router = express.Router();
import { create, index, find, update, destroy } from './controller.js';
import {
    authenticateUser,
    authorizeRoles
} from '../../../middlewares/auth.js'

router.get('/talents', authenticateUser, authorizeRoles('organizer'), index)
router.get('/talents/:id', authenticateUser, authorizeRoles('organizer'), find)
router.put('/talents/:id', authenticateUser, authorizeRoles('organizer'), update)
router.delete('/talents/:id', authenticateUser, authorizeRoles('organizer'), destroy)
router.post('/talents', authenticateUser, authorizeRoles('organizer'), create)

export default router 