import mongoose from 'mongoose';
const myTeamSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users"},
    team : {type: Array},
    // player1 : {type: String, unique: true},
    // player2 : {type: String, unique: true},
    // player3 : {type: String, unique: true},
    // player4 : {type: String, unique: true},
    // player5 : {type: String, unique: true},
    // player6 : {type: String, unique: true},
    // player7 : {type: String, unique: true},
    // player8 : {type: String, unique: true},
    // player9 : {type: String, unique: true},
    // player10 : {type: String, unique: true},
    // player11 : {type: String, unique: true}
}, {collection: 'myTeam'});


export default myTeamSchema;