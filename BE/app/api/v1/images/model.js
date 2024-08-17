import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const imageSchema = new Schema({
    name: {
        type: String,
    },
},
    {
        timestamps: true
    }
);

export default mongoose.model('Image', imageSchema);
