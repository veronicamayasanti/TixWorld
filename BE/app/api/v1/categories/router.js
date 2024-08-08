import express from 'express';
const router = express.Router();

router.get('/categories', (req, res) => {
    res.status(200).json({
        message: 'Halaman categories TixWorld'
    })
})

export default router 