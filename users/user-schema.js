import mongoose from 'mongoose';
const usersSchema = mongoose.Schema({
    firstName: {type: String, required: true, unique: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    phone : {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    userType: {type: String, enum:["admin", "commissioner", "manager"]},
    image: {type: String, default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzEHOrh-V8j93nosL_DUGwpSQtXzPNSfga3-vyy8no4RcefO-agYJn7dkAXWyRetYBK0Y&usqp=CAU"},
    status : {type: String, default: "I'm new here say hello!"},
}, {collection: 'users'});
export default usersSchema;