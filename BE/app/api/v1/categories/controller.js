import Categories from './model.js';

export const create = async (req, res, next) => {
    try {
        const { name } = req.body;
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

export const index = async (req, res, next) => {
    try {
        const result = await Categories.find().select('_id name');
        res.status(200).json({
            message: 'Category fetched successfully',
            data: result
        });
    } catch (error) {
        console.error("Error fetching category:", error.message);
        next(error);
    }
}

export const find = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Categories.findOne({ _id: id });
        if (!result) return res.status(404).json({
            message: 'Category not found'
        })
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }

}

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const result = await Categories.findOneAndUpdate(
            { 
                _id: id 
            },
            { name },
            { new: true, rupsert: true }
        );
        res.status(200).json({
            data: result,
            message: 'Category updated successfully'
        });
    } catch (error) {
        next(error);
    }
}