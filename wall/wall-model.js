import mongoose from "mongoose";
import wallSchema from "./wall-schema.js";
const wallModel = mongoose.model("wall", wallSchema);
export default wallModel;