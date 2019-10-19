import mongoose from "mongoose";

const itemCategorySchema = new mongoose.Schema({
    title: { type: String, required: true }
});

export default mongoose.model("ItemCategory", itemCategorySchema);
