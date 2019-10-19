import db from "../models";

export const getItems = async (req, res, next) => {
    try {
        let items = await db.Item.find();
        return res.status(200).json(items);
    } catch (err) {
        console.log(err);
    }
};
export const createItem = async (req, res, next) => {
    return res.send("Create item");
};
export const getItem = async (req, res, next) => {
    return res.send("Get item");
};
export const updateItem = async (req, res, next) => {
    return res.send("Update item");
};
export const deleteItem = async (req, res, next) => {
    return res.send("Delete item");
};
