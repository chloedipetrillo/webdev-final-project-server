import mongoose from 'mongoose';
const myLeaguesSchema = new mongoose.Schema({
    commissionerId: String,
    leagueName : {type: String, unique: true},
}, {collection: 'myLeagues'});


export default myLeaguesSchema;