import mongoose from "mongoose";
import config from "../config";

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" },
    image: String,
    price: { type: Number, default: 0, min: 0 },
    isFeatured: { type: Boolean, default: false },
    featured: {
        image: { type: String, default: "" },
        caption: { type: String, default: "" }
    },
    category: { type: String, enum: config.itemCategories, required: true },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
//Weird export/import behaviour
