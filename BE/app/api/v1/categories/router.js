import express from 'express';
const router = express.Router();
import  { create, index, find, update, destroy } from './controller.js';
import { 
    authenticateUser, 
    authorizeRoles
 } from '../../../middlewares/auth.js'

router.get('/categories', authenticateUser, authorizeRoles('organizer'), index)
router.get('/categories/:id', authenticateUser, authorizeRoles('organizer'), find)
router.put('/categories/:id', authenticateUser, authorizeRoles('organizer'), update)
router.delete('/categories/:id', authenticateUser, authorizeRoles('organizer'), destroy)
router.post('/categories', authenticateUser, authorizeRoles('organizer'), create)


export default router 