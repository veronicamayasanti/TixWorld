import mongoose from 'mongoose';
const { Schema } = mongoose;

let imageSchema = new Schema(
    {
    name: { type : String},
},
    {
        timestamps: true
    });


export default mongoose.model('Images', imageSchema);
