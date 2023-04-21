import mongoose from "mongoose";
import teamLeagueSchema from "./team-leagues-schema.js";
const teamLeaguesModel = mongoose.model("teamLeagues", teamLeagueSchema);
export default teamLeaguesModel;