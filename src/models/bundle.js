import mongoose from "mongoose";
import Item from "./item";

const bundleSchema = new mongoose.Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    discount: { type: Number, default: 0, min: 0, max: 100 }
});

const Bundle = Item.discriminator("Bundle", bundleSchema);
module.exports = Bundle;
//Weird export/import behaviour
