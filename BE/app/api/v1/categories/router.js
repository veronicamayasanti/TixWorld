import express from 'express';
const router = express.Router();
import  { create, index, find, update, destroy } from './controller.js';
import { 
    authenticateUser, 
    authorizeRoles
 } from '../../../middlewares/auth.js'

router.get('/categories', authenticateUser, authorizeRoles('organizer'), index)
router.get('/categories/:id', authenticateUser, find)
router.put('/categories/:id', authenticateUser, update)
router.delete('/categories/:id', authenticateUser, destroy)
router.post('/categories', authenticateUser, create)


export default router 