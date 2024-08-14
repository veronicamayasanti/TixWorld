import Images from '../../api/v1/images/model.js';
/**
 * 2. generate url setelah submit baru disimpan
 * 
 **/

// cara 2
const generateUrlImage = async (req) => {
    const result = `/uploads/${req.file.filename}`;

    return result;
};


// cara 1
const createImages = async (req) => {
    const result = await Images.create({
    name: req.file
    ? `uploads/${req.file.filename}`
    : 'uploads/avatar/default.jpeg', // default image
});

return result;
};

export default { createImages, generateUrlImage }