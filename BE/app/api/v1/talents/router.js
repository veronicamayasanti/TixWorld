import express from 'express';
const router = express.Router();
import { create, index, find, update, destroy } from './controller.js';

router.get('/talents', index)
router.get('/talents/:id', find)
router.put('/talents/:id', update)
router.delete('/talents/:id', destroy)
router.post('/talents', create)

export default router