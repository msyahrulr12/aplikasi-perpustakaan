import mongoose from 'mongoose';
const { Schema } = mongoose;


const userSchema = new Schema({
    name: {
        first_name: String,
        last_name: String
    },
    email: String,
    password: String,
    role: String
});

const userModel = mongoose.model('Users', userSchema);
export default userModel