import { ItemCategory, Item } from "../models";

export const getItemCategories = async (req, res, next) => {
    try {
        const itemCategories = await ItemCategory.find();
        return res.status(200).json(itemCategories);
    } catch (err) {
        next(err);
    }
};
export const createItemCategory = async (req, res, next) => {
    try {
        const itemCategory = await ItemCategory.create(req.body.itemCategory);
        await itemCategory.save();
        const foundItemCategory = await ItemCategory.findById(itemCategory._id);
        return res.status(200).json(foundItemCategory);
    } catch (err) {
        next(err);
    }
};
export const getItemCategory = async (req, res, next) => {
    try {
        const itemCategory = await ItemCategory.findById(req.params.itemCategory_id);
        return res.status(200).json(itemCategory);
    } catch (err) {
        next(err);
    }
};
export const updateItemCategory = async (req, res, next) => {
    try {
        const itemCategory = await ItemCategory.findByIdAndUpdate(
            req.params.item_id,
            req.body.item,
            { new: true }
        );
        return res.status(200).json(itemCategory);
    } catch (err) {
        next(err);
    }
};
export const deleteItemCategory = async (req, res, next) => {
    try {
        await ItemCategory.findByIdAndDelete(req.params.itemCategory_id);
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};

export const getCategoryItems = async (req, res, next) => {
    try {
        const items = await Item.find({
            category: req.params.itemCategory_id
        });
        return res.status(200).json(items);
    } catch (err) {
        next(err);
    }
};
