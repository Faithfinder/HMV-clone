import { Item, ItemCategory } from "../models";

export const getItems = async (req, res, next) => {
    try {
        const items = await Item.find();
        return res.status(200).json(items);
    } catch (err) {
        next(err);
    }
};
export const createItem = async (req, res, next) => {
    try {
        const item = await Item.create(req.body.item);
        const savedItem = await item.save();
        return res.status(200).json(savedItem);
    } catch (err) {
        next(err);
    }
};
export const getItem = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.item_id);
        return res.status(200).json(item);
    } catch (err) {
        next(err);
    }
};
export const updateItem = async (req, res, next) => {
    try {
        let item = await Item.findByIdAndUpdate(
            req.params.item_id,
            req.body.item,
            { new: true }
        );

        const category_id = req.body.item.category;
        if (category_id && item) {
            const category = await ItemCategory.findById(category_id);
            item.category = { id: category._id, title: category.title };
            item = await item.save();
        }

        return res.status(200).json(item);
    } catch (err) {
        next(err);
    }
};
export const deleteItem = async (req, res, next) => {
    try {
        await Item.findByIdAndDelete(req.params.item_id);
        return res.sendStatus(204);
    } catch (err) {
        next(err);
    }
};
