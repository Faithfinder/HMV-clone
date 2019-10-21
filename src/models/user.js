import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, default: false }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
//Weird export/import behaviour
