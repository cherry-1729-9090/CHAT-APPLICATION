import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    iss: {
        type: String,
    },
    azp: {
        type: String,
    },
    aud: {
        type: String,
    },
    sub: {
        type: String,
    },
    email: {
        type: String,
    },
    email_verified: {
        type: Boolean,
    },
    name: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    },
    given_name: {
        type: String,
    },
    family_name: {
        type: String,
    },
    iat: {
        type: Number,
    },
    exp: {
        type: Number,
    },
    jti: {
        type: String,
    },
});

const User = mongoose.model('User', userSchema);
export default User;