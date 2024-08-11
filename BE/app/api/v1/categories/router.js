import express from 'express';
const router = express.Router();
import  create from './controller.js';

router.get('/categories', (req, res) => {
    const data = [
        {
            _id: '352343',
            name: 'TixWorld'
        }
    ];
    res.status(200).json({
        message: 'Halaman categories TixWorld',
        data : data
    })
})

router.post('/categories', create)


export default router 