import Images from '../../api/v1/images/model.js';
import NotFoundError from '../../errors/not-found.js';


// cara 2
// const generateUrlImage = async (req) => {
//     const result = `/uploads/${req.file.filename}`;

//     return result;
// };


// cara 1
export const createImages = async (req) => {
    try {
        const result = await Images.create({
            name: req.file
                ? `/uploads/${req.file.filename}`
                : '/uploads/avatar/default.jpeg',
        })
        console.log('result', result);
        return result
    } catch (error) {
        console.log('error pada create images', error)
    }
}

export const checkingImage = async (id) => {
    const result = await Images.findOne({ 
        _id: id 
    })
    if (!result) throw new NotFoundError(`Image with id ${id} not found`)
    return result
};

