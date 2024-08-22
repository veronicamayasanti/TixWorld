import { checkingImage } from './images.js';
import { checkingTalents } from './talents.js';
import { checkingCategories } from './categories.js';

import NotFoundError from '../../errors/not-found.js';
import BadRequestError from '../../errors/bad-request.js';
import Events from '../../api/v1/events/model.js';

const getAllEvents = async (req) => {
    const { keyword, category, telent } = req.query;

    let condition = {organizer: req.user.organizer
};

    if (keyword) {
        condition = { ...condition, title: { $regex: keyword, $options: 'i' } };
    }

    if (category) {
        condition = { ...condition, category: category };
    }

    if (telent) {
        condition = { ...condition, talent: telent };
    }

    try {
        const result = await Events.find(condition)
            .populate({ path: 'image', select: '_id name' })
            .populate({ path: 'category', select: '_id name' })
            .populate({ path: 'talent', select: '_id name role image', populate: { path: 'image', select: '_id name' } });

        return result;
    } catch (error) {
        console.log('error get all events', error);
        throw error;
    }

}

const createEvents = async (req) => {
    const {
        title,
        date,
        about,
        tagline,
        venueName,
        keyPoint,
        statusEvent,
        tickets,
        image,
        category,
        talent,
       
    } = req.body;

    // cari image, category, talent dengan field id
    await checkingImage(image);
    await checkingCategories(category);
    await checkingTalents(talent);

    // cari events dengan field title
    const check = await Events.findOne({ title });
    if (check) throw new BadRequestError(`Events with title ${title} already exists`);

    const result = await Events.create({
        title,
        date,
        about,
        tagline,
        venueName,
        keyPoint,
        statusEvent,
        tickets,
        image,
        category,
        talent,
        organizer: req.user.organizer
    });
    return result;
}

const getOneEvents = async (req) => {
    const { id } = req.params;

    const result = await Events.findOne({ _id: id, organizer: req.user.organizer })
        .populate({ path: 'image', select: '_id name' })
        .populate({ path: 'category', select: '_id name' })
        .populate({ path: 'talent', select: '_id name role image', populate: { path: 'image', select: '_id name' } });

    if (!result) throw new NotFoundError(`Events with id ${id} not found`);
    return result;
}

const updateEvents = async (req) => {
    const { id } = req.params;
    const {
        title,
        date,
        about,
        tagline,
        venueName,
        keyPoint,
        statusEvent,
        tickets,
        image,
        category,
        talent
    } = req.body;
    // cari image, category, talent dengan field id
    await checkingImage(image);
    await checkingCategories(category);
    await checkingTalents(talent);

    // cari events dengan field id
    const cekIDEvent = await Events.findOne({ _id: id, organizer: req.user.organizer });
    if (!cekIDEvent) throw new NotFoundError(`Events with id ${id} not found`);

    // cari events dengan field title dan id selain dari yang dikirim dari params
    const check = await Events.findOne({ title, _id: { $ne: id } });
    if (check) throw new BadRequestError(`Events with title ${title} already exists`);

    const result = await Events.findOneAndUpdate(
        { _id: id },
        {
            title,
            date,
            about,
            tagline,
            venueName,
            keyPoint,
            statusEvent,
            tickets,
            image,
            category,
            talent,
            organizer: req.user.organizer
        },
        { new: true, runValidators: true }
    );
    
    return result;
}

const deleteEvents = async (req) => {
    const { id } = req.params;
    const result = await Events.findOne({ _id: id });
    if (!result) throw new NotFoundError(`Events with id ${id} not found`);
    await Events.deleteOne({ _id: id, organizer: req.user.organizer });
    return result;
}

export {
    getAllEvents,
    createEvents,
    getOneEvents,
    updateEvents,
    deleteEvents
}