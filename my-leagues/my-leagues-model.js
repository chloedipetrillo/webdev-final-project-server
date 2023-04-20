import mongoose from "mongoose";
import myLeaguesSchema from "./my-leagues-schema.js";
const myLeaguesModel = mongoose.model("myTeam", myLeaguesSchema);
export default myLeaguesModel;