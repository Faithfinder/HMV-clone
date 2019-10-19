import { Item } from "../models";

export const getItems = async (req, res, next) => {
    try {
        const items = await Item.find();
        return res.status(200).json(items);
    } catch (err) {
        console.log(err);
    }
};
export const createItem = async (req, res, next) => {
    try {
        const item = await Item.create(req.body.item);
        await item.save();
        const foundItem = await Item.findById(item._id);
        return res.status(200).json(foundItem);
    } catch (err) {
        console.log(err);
    }
};
export const getItem = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.item_id);
        return res.status(200).json(item);
    } catch (err) {
        console.log(err);
    }
};
export const updateItem = async (req, res, next) => {
    try {
        const item = await Item.findByIdAndUpdate(
            req.params.item_id,
            req.body.item,
            { new: true }
        );
        return res.status(200).json(item);
    } catch (err) {
        console.log(err);
    }
};
export const deleteItem = async (req, res, next) => {
    try {
        await Item.findByIdAndDelete(req.params.item_id);
        return res.sendStatus(204);
    } catch (err) {
        console.log(err);
    }
};
