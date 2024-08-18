import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name harus diisi'],
        minlength: [3, 'panjang minimal 3 karakter'],
        maxlength: [20, 'panjang maksimal 20 karakter']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email harus diisi']
    },
    password: {
        type: String,
        required: [true, 'password harus diisi'],
        minlength: [6, 'panjang minimal 6 karakter']
    },
    role: {
        type: String,
        enum: ['admin', 'organizer', 'owner'],
        default: 'admin'
    },
    organizer: {
        type: mongoose.Types.ObjectId,
        ref: 'Organizer',
        required: [true, 'organizer harus diisi']
    },
},
    { timestamps: true }
);


usersSchema.pre('save', async function (next) {
    const User = this;
    if(User.isModified('password')) {
        User.password = await bcrypt.hash(User.password, 10);
    }
    next();
});

usersSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}


export default mongoose.model('User', usersSchema);