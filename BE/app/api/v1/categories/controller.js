import Categories from './model.js';

const create = async (req, res, next) => {
    try {
        const  { name } = req.body;
        const result = await Categories.create({ name });
        res.status(201).json({
            message: 'Category created successfully',
            data: result
        });
    } catch (error) {
        console.error("Error creating category:", error.message);
        next(error);
    }
}

export default create

