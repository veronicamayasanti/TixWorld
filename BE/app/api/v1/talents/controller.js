import { 
    getAllTalents, 
    createTalents, 
    getOneTalents, 
    updateTalents, 
    deleteTalents 
} from '../../../services/mongoose/talents.js'

import { StatusCodes } from 'http-status-codes'

const create = async (req, res, next) => {
    try {
        const result = await createTalents(req)
        res.status(StatusCodes.CREATED).json({
            message: 'Talent created successfully',
            data: result
        })
    } catch (error) {
        console.error("Error creating talent:", error.message);
        next(error);
    }
}

const index = async (req, res, next) => {
    try {
        const result = await getAllTalents(req)
        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (error) {
        console.error("Error fetching talent:", error.message);
        next(error);
    }
}

const find = async (req, res, next) => {
    try {
        const result = await getOneTalents(req)
        res.status(StatusCodes.OK).json({
            data: result
        })
    } catch (error) {
        console.error("Error fetching talent:", error.message);
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateTalents(req)
        res.status(StatusCodes.OK).json({
            message: 'Talent updated successfully',
            data: result
        })
    } catch (error) {
        console.error("Error updating talent:", error.message);
        next(error);
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteTalents(req)
        res.status(StatusCodes.OK).json({
            message: 'Talent deleted successfully',
            data: result
        })
    } catch (error) {
        console.error("Error deleting talent:", error.message);
        next(error);
    }
}

export { create, index, find, update, destroy }