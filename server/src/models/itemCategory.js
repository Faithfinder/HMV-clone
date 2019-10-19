import mongoose from "mongoose";

const itemCategorySchema = new mongoose.Schema({
    title: { type: String, required: true }
});

const ItemCategory = mongoose.model("ItemCategory", itemCategorySchema);
module.exports = ItemCategory;
//Weird export/import behaviour