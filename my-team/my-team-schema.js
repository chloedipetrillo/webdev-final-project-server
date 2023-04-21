import mongoose from 'mongoose';
const myTeamSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    team : {type: Array},
    scoresThisWeek: {type: Number, default: 0},
    totalScores: {type: Number, default: 0}
}, {collection: 'myTeam'});


export default myTeamSchema;