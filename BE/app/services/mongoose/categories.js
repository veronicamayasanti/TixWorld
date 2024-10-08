import Categories from '../../api/v1/categories/model.js';
import  BadRequestError  from '../../errors/bad-request.js';
import NotFoundError from '../../errors/not-found.js';


const getAllCategories = async (req) => {
    console.log('req.user', req.user);
    
    const result = await Categories.find({ organizer: req.user.organizer });
    return result;
};

const createCategories = async (req) => {
    const { name } = req.body;
    // cari categories dengan name yang sama
    const check = await Categories.findOne({ name, organizer: req.user.organizer });

    // jika categories dengan name yang sama ditemukan, kembalikan error
    if (check) throw new BadRequestError(`Category with name ${name} already exists`);

    // jika categories dengan name yang sama tidak ditemukan
    const result = await Categories.create({ name, organizer: req.user.organizer });
    return result;
};

const getOneCategories = async (req) => {
    const { id } = req.params;
    const result = await Categories.findOne({ _id: id, organizer: req.user.organizer });
    if(!result) throw new NotFoundError(`Category with id ${id} not found`);
    return result;
}

const updateCategories = async (req) => {
    const { id } = req.params;
    const { name } = req.body;
  

    // cari categories dengan field name dan id selain dari yang dikirim dari params
    const check = await Categories.findOne({ 
        name, 
        organizer: req.user.organizer,
        _id: { $ne: id } 
    });

    // jika categories dengan name yang sama ditemukan, kembalikan error
    if (check) throw new BadRequestError(`Category with name ${name} already exists`);

    // jika categories dengan name yang sama tidak ditemukan
    const result = await Categories.findOneAndUpdate(
        { _id: id }, 
        { name },
        { new: true , runValidators: true }
    );

    // jika categories tidak ditemukan, kembalikan error
    if(!result) throw new NotFoundError(`Category with id ${id} not found`);

    return result;
}

const deleteCategories = async (req) => {
    const { id } = req.params;
    const result = await Categories.findOne({ 
        _id: id,
        organizer: req.user.organizer
    });

    if(!result) throw new NotFoundError(`Category with id ${id} not found`);
    
    await Categories.deleteOne({ _id: id });
    return result;
}

const checkingCategories = async (id) => {
    const result = await Categories.findOne({ 
        _id: id
    })
    if (!result) throw new NotFoundError(`Category with id ${id} not found`)
    return result
}

export { 
    getAllCategories, 
    createCategories, 
    getOneCategories, 
    updateCategories,
    deleteCategories,
    checkingCategories
};

