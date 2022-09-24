import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    fname: String,
    lname: String,
    cname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    mobile: {type: Number, required: true},
    pass: {type: String, required: true},
    type: String,
});

const User = models.User || model('User', userSchema);

export default User;
