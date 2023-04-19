import mongoose from 'mongoose';
const profileSchema = mongoose.Schema({
    pid: {type: String, required: true},
    comment: String,
    user: String,
    date: Date,
}, {collection: 'chat'});
export default profileSchema;