import mongoose from "mongoose";

const bundleSchema = new mongoose.Schema({
    title: { type: String, required: true },    
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }]
});

const Bundle = mongoose.model("Bundle", bundleSchema);
module.exports = Bundle;
//Weird export/import behaviour
