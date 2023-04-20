import mongoose from 'mongoose';
const myTeamSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users", unique: true},
    team : {type: Array},
}, {collection: 'myTeam'});


export default myTeamSchema;