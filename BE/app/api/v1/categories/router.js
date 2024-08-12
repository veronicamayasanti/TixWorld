import express from 'express';
const router = express.Router();
import  { create, index, find, update, destroy } from './controller.js';

router.get('/categories', index)
router.get('/categories/:id', find)
router.put('/categories/:id', update)
router.delete('/categories/:id', destroy)
router.post('/categories', create)


export default router 