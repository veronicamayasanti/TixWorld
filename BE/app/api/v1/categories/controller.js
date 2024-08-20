import {StatusCodes} from 'http-status-codes'
import { 
    getAllCategories, 
    createCategories,
    getOneCategories,
    updateCategories,
    deleteCategories
}  from'../../../services/mongoose/categories.js'

export const create = async (req, res, next) => {
    try {
       
        const result = await createCategories(req);
        res.status(StatusCodes.CREATED).json({
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
        const result = await getAllCategories(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (error) {
        console.error("Error fetching category:", error.message);
        next(error);
    }
}

export const find = async (req, res, next) => {
    try {

        const result = await getOneCategories(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (error) {
        next(error);
    }

}

export const update = async (req, res, next) => {
    try {
        const result = await updateCategories(req);
        res.status(StatusCodes.OK).json({
            data: result,
            message: 'Category updated successfully'
        });
    } catch (error) {
        next(error);
    }
}

export const destroy = async (req, res, next) => {
    try {
        
        const result = await deleteCategories(req);
        res.status(StatusCodes.OK).json({
            data: result,
            message: 'Category deleted successfully'
        });
    } catch (error) {
        next(error);
    }
    }
    