import mongoose from "mongoose";
import {model, Schema } from "mongoose";

const organizersSchema = new Schema({
    organizer: {
        type: String,
        required: [true, 'organizer harus diisi']
    }
},
    { timestamps: true }
);

const Organizer = new model('Organizer', organizersSchema);
export default Organizer