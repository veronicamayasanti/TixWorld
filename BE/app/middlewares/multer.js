import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb)  {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Math.floor(Math.random() * 99999999) + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpeg' || 
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg'
    ) {
        cb(null, true);
    } else {
        // reject a file
        cb({
            message: 'Only jpeg, jpg, and png are allowed'
        },
        false
    );
    }
};

const uploadMiddleware = multer({
    storage,
    limits: {
        fileSize: 5000000
    },
    fileFilter: fileFilter
});

export default uploadMiddleware 