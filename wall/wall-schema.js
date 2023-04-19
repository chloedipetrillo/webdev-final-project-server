import mongoose from 'mongoose';
const wallSchema = mongoose.Schema({
    uid: {type: String, required: true},
    cid : {type: String, required: true},
    post: String,
    date: Date,
}, {collection: 'wall'});
export default wallSchema;