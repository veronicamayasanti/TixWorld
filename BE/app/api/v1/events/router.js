import express from 'express';
const router = express.Router();
import { create, index, find, update, destroy } from './controller.js';

router.get('/events', index)
router.get('/events/:id', find)
router.put('/events/:id', update)
router.delete('/events/:id', destroy)
router.post('/events', create)

export default router;