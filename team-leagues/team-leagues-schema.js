import mongoose from 'mongoose';
const teamLeaguesSchema = new mongoose.Schema({
    leagueId : {type: mongoose.Schema.Types.ObjectId, ref: "myLeagues"},
    leagueName : String,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    combination : {type: String, unique: true}

}, {collection: 'teamLeagues'});


export default teamLeaguesSchema;