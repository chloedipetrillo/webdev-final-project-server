import mongoose from "mongoose";
import usersSchema from "./user-schema.js";
const usersModel = mongoose.model("users", usersSchema);
export default usersModel;