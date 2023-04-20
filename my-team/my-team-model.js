import mongoose from "mongoose";
import myTeamSchema from "./my-team-schema.js";
const myTeamModel = mongoose.model("myTeam", myTeamSchema);
export default myTeamModel;