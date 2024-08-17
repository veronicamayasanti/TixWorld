import mongoose from "mongoose";

const { model, Schema } = mongoose;

const talentSchema = new  mongoose.Schema(
{
    name: { 
        type : String,
        required: [true, 'name harus diisi']
},
    role: { 
        type : String,
        default: '-',
    },
    // untuk membuat relasi pada mongodb perlu membuat types objectID
    image: {
        type: Schema.Types.ObjectId,
        ref: 'Image',
        required: [true, 'image harus diisi']
    },
},
    {
        timestamps: true
    }
);

const Talent = new mongoose.model('Talent', talentSchema);

export default Talent