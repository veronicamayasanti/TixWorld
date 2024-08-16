import mongoose from 'mongoose';
const {model, Schema } = mongoose;

const imageSchema = new  mongoose.Schema(
    {
    name: { type : String},
},
    {
        timestamps: true
    }
);
const Image = new mongoose.model('Image', imageSchema);

export default Image


