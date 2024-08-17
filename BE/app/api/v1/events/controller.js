import {
    getAllEvents,
    createEvents,
    getOneEvents,
    updateEvents,
    deleteEvents
} from '../../../services/mongoose/events.js';

import { StatusCodes } from 'http-status-codes';

const create = async (req, res, next) => {
    try {
        const result = await createEvents(req);
        res.status(StatusCodes.CREATED).json({
            message: 'Event created successfully',
            data: result
        });
    } catch (error) {
        console.error("Error creating event:", error.message);
        next(error);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await getAllEvents(req);
        res.status(StatusCodes.OK).json({
            message: 'Events fetched successfully',
            data: result
        });
    } catch (error) {
        console.error("Error fetching events:", error.message);
        next(error);
    }
};

const find = async (req, res, next) => {
    try {
        const result = await getOneEvents(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (error) {
        console.error("Error fetching event:", error.message);
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const result = await updateEvents(req);
        res.status(StatusCodes.OK).json({
            message: 'Event updated successfully',
            data: result
        });
    } catch (error) {
        console.error("Error updating event:", error.message);
        next(error);
    }
};

const destroy = async (req, res, next) => {
    try {
        const result = await deleteEvents(req);
        res.status(StatusCodes.OK).json({
            message: 'Event deleted successfully',
            data: result
        });
    } catch (error) {
        console.error("Error deleting event:", error.message);
        next(error);
    }
};

export { create, index, find, update, destroy }