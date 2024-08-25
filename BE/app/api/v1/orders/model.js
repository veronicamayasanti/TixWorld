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

}, {
    timestamps: true

})

const Order = mongoose.model('Order', orderSchema)

export default Order