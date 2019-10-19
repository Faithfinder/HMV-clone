import mongoose from "mongoose";
import ItemCategory from "./itemCategory";

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    featured: { type: Boolean },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "ItemCategory" }
});

export default mongoose.model("Item", itemSchema);
