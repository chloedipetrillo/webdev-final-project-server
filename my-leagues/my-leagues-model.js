import mongoose from "mongoose";
import myLeaguesSchema from "./my-leagues-schema.js";
const myLeaguesModel = mongoose.model("myLeagues", myLeaguesSchema);
export default myLeaguesModel;