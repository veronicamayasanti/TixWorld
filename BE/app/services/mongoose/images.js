import Images from '../../api/v1/images/model.js';


// cara 2
// const generateUrlImage = async (req) => {
//     const result = `/uploads/${req.file.filename}`;

//     return result;
// };


// cara 1
const createImages = async (req) => {
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

export default createImages;