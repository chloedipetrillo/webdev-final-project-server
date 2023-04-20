import mongoose from 'mongoose';
const myLeaguesSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users", unique: true},
    leagueName : {type: String},
}, {collection: 'myLeagues'});


export default myLeaguesSchema;