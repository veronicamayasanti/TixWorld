import mongoose from "mongoose";

const orderDetailsSchema = new mongoose.Schema({
    ticketCategories: {
        type: {
            type: String,
            required: [true, 'type tiket harus diisi']
        },
        price: {
            type: Number,
            default: 0
        },
        sumTicket: {
            type: Number,
            required: true
    }
},
})

const orderSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: [true, 'date harus diisi']
    },
    personalDetail: {
        firstName: {
            type: String,
            required: [true, 'firstName harus diisi'],
            minlength: [3, 'panjang minimal 3 karakter'],
            maxlength: [20, 'panjang maksimal 20 karakter']
        },
        lastName: {
            type: String,
            required: [true, 'lastName harus diisi'],
            minlength: [3, 'panjang minimal 3 karakter'],
            maxlength: [20, 'panjang maksimal 20 karakter']
        },
        email: {
            type: String,
            required: [true, 'email harus diisi']
        },
        role: {
            type: String,
            default: 'Designer'
        }
    },

    status: {
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending'
    },
    totalPay: {
        type: Number,
        required: true
    },
    totalOrderTicket: {
        type: Number,
        requirder: true
    },
    orderItems: [orderDetailsSchema],
    participant: {
        type: mongoose.Types.ObjectId,
        ref: 'Participant',
        required: [true, 'participant harus diisi']
    },
    payment: {
        type: mongoose.Types.ObjectId,
        ref: 'Payment',
        required: [true, 'payment harus diisi']
    },
    event: {
        type: mongoose.Types.ObjectId,
        ref: 'Event',
        required: [true, 'event harus diisi']
    },
    historyEvent: {
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
        },
        organizer: {
            type: mongoose.Types.ObjectId,
            ref: 'Organizer',
            required: [true, 'organizer harus diisi']
        }
    }

},
 {
    timestamps: true

})

const Order = mongoose.model('Order', orderSchema)

export default Order