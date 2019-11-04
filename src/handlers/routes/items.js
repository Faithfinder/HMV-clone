import { Item } from "../../models";

export const getItems = async ({ query }, res, next) => {
    try {
        const items = await Item.find({ query });
        return res.status(200).json(items);
    } catch (err) {
        next(err);
    }
};

export const createItem = async (req, res, next) => {
    try {
        const item = await Item.create(req.body.item);
        return res.status(200).json(item);
    } catch (err) {
        next(err);
    }
};

export const getItem = async (req, res, next) => {
    try {
        const item = await Item.findById(req.params.item_id)
            .populate("category", "title")
            .populate({
                path: "reviews",
                populate: { path: "author", model: "User", select: "email" }
            })
            .populate("reviews.author");
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
