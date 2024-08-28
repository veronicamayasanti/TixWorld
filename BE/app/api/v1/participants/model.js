import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const participantsSchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: [true, 'password harus diisi'],
        minlength: [6, 'panjang minimal 6 karakter']
    },
    role: {
        type: String,
        default: '-'
    },
    status: {
        type: String,
        enum: ['aktif', 'tidak aktif'],
        default: 'tidak aktif'
    },
    otp: {
        type: String,
        required: true
    },
}, { timestamps: true });

participantsSchema.pre('save', async function (next) {
    const User = this;
    if(User.isModified('password')) {
        User.password = await bcrypt.hash(User.password, 12);
    }
    next();
});

participantsSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

const Participants = new mongoose.model('Participants', participantsSchema);

export default Participants;
