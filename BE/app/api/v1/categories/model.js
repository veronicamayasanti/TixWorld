import mongoose from 'mongoose';
const { Schema } = mongoose;

let categorySchema = new Schema({
    name: {
        type: String,
        minlength: [3, 'panjang minimal 3 karakter'],
        maxlength: [20, 'panjang maksimal 20 karakter'],
        required: [true, 'name harus diisi']
    },
},
    {
        timestamps: true
    });


export default mongoose.model('Category', categorySchema);
