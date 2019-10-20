import express from "express";
const router = express.Router({ mergeParams: true });

import {
    getItem,
    getItems,
    createItem,
    deleteItem,
    updateItem
} from "../handlers/items";

router
    .route("/")
    .get(getItems)
    .post(createItem);

router
    .route("/:item_id")
    .get(getItem)
    .patch(updateItem)
    .delete(deleteItem)

export default router;
