import { Schema, model } from 'mongoose';

const UsersSchema = new Schema({
    firtsname: {
        type: String,
        required: true
    },
    lastname: String,
    age: Number
})

export default model("User", UsersSchema);