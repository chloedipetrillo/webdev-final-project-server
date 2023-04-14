import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
    firstName: {type: String, required: true, unique: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    userType: {type: String, enum:["admin", "commissioner", "manager"]}
}, {collection: 'users'});
export default usersSchema;

