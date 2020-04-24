import * as mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';

export const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },

    password: {
        type: String,
        minlength: 6,
        select: false,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

});

UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.get('password'), 10);
    this.set('password', hash);

    next();
});
