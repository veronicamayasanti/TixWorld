import mongoose from "mongoose";

const ticketCategoriesSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'type tiket harus diisi']
    },
    price: {
        type: Number,
       default: 0
    },
    stock: {
        type: Number,
        default: 0
    },
    statusTikectCategories: {
        type: Boolean,
        enum: [true, false],
        default: true
    },
    expired: {
        type: Date
    }
});

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title harus diisi'],
        minlength: [3, 'panjang minimal 3 karakter'],
        maxlength: [50, 'panjang maksimal 50 karakter']
    },
    date: {
        type: Date,
        required: [true, 'date harus diisi']
    },
    about: {
        type: String,
    },
    tagline: {
        type: String,
        required: [true, 'tagline harus diisi']
    },
    venueName: {
        type: String,
        required: [true, 'venueName harus diisi']
    },
    keyPoint: {
        type: [String]
    },
    statusEvent: {
        type: String,
        enum: ['Draft', 'Published'],
        default: 'Draft'
    },
    tickets: {
        type: [ticketCategoriesSchema],
        required: true
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
        required: [true, 'image harus diisi']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'category harus diisi']
    },
    talent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Talent',
        required: [true, 'talent harus diisi']
    }
},
    {
        timestamps: true
    }
);

const Event = new mongoose.model('Event', eventSchema);
export default Event;

