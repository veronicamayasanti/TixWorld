import Talents from '../../api/v1/talents/model.js';
import {checkingImage} from './images.js';
import BadRequestError from '../../errors/bad-request.js';
import NotFoundError from '../../errors/not-found.js';

const getAllTalents = async (req,res,next) => {
    // filter pencarian berdasarkan name 
    const { keyword } = req.query;
    console.log(keyword);
    
    // awalnya condiotion adalah object kosong
    let condition = {};
    // cek keywordnya true atau false, jadi keywordnya ada atau tidak
    if (keyword) {
        condition= {...condition, name: { $regex: keyword, $options: 'i' } };
    }
    console.log('condition before query: ', condition);
    try {
        const result = await Talents.find(condition).populate({
                path: 'image',
                select: '_id name',
            }).select('_id name role image');
        return result;
    } catch (error) {
        console.log('error', error);
        throw error
    }

}

const createTalents = async (req) => {
    const { name, role, image } = req.body;
    // cari image dengan field image
    await checkingImage(image);

    // cari talents dengan field name
    const check = await Talents.findOne({ name });

    // jika talents dengan name yang sama ditemukan, kembalikan error
    if (check) throw new BadRequestError(`Talent with name ${name} already exists`);

    // jika talents dengan name yang sama tidak ditemukan, buat talents baru
    const result = await Talents.create({ name, role, image });
    return result;
}

const getOneTalents = async (req) => {
    const { id } = req.params;
    const result = await Talents.findOne({ _id: id })
        .populate({
            path: 'image',
            select: '__id name',
        })
        .select('__id name role image');
    if (!result) throw new NotFoundError(`Talent with id ${id} not found`);
    return result;
};

const updateTalents = async (req) => {
    const { id } = req.params;
    const { name, role, image } = req.body;
    // cari image dengan field image
    await checkingImage(image);
    // cari talents dengan field name dan id selain dari yang dikirim dari params
    const check = await Talents.findOne({ 
        name, 
        _id: { $ne: id } 
    });

    // jika talents dengan name yang sama ditemukan, kembalikan error
    if (check) throw new BadRequestError(`Talent with name ${name} already exists`);

    // jika talents dengan name yang sama tidak ditemukan, update talents
    const result = await Talents.findOneAndUpdate(
        { _id: id },
        { name, role, image },
        { new: true, runValidators: true }
    );

    // jika talents tidak ditemukan, kembalikan error
    if (!result) throw new NotFoundError(`Talent with id ${id} not found`);
    return result;
};

const deleteTalents = async (req) => {
    const { id } = req.params;
    const result = await Talents.findOne({ _id: id });
    if (!result) throw new NotFoundError(`Talent with id ${id} not found`);
    await Talents.deleteOne({ _id: id });
    return result;
};

const checkingTalents = async (id) => {
    const result = await Talents.findOne({ _id: id });
    if (!result) throw new NotFoundError(`Talent with id ${id} not found`);
    return result;
};

export { getAllTalents, createTalents, getOneTalents, updateTalents, deleteTalents, checkingTalents };


