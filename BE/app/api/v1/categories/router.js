import express from 'express';
const router = express.Router();
import  { create, index, find, update } from './controller.js';

router.get('/categories', index)
router.get('/categories/:id', find)
router.put('/categories/:id', update)
router.post('/categories', create)


export default router 