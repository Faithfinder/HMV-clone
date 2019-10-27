import mongoose from "mongoose";

const bundleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    disount: [{ type: Number, default: 0, min: 0, max: 100 }]
});

const Bundle = mongoose.model("Bundle", bundleSchema);
module.exports = Bundle;
//Weird export/import behaviour
