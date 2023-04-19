import mongoose from 'mongoose';
const followsSchema = new mongoose.Schema({
    follower : {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    followed: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    combination : {type: String, unique: true}

}, {collection: 'follows'});


export default followsSchema;