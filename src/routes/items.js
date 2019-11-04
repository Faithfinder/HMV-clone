import express from "express";
const router = express.Router({ mergeParams: true });

import { loginRequired, adminRequired } from "../middleware/auth";

import {
    getItem,
    getItems,
    getFeatured,
    createItem,
    deleteItem,
    updateItem
} from "../handlers/routes/items";

router
    .route("/")
    .get(getItems)
    .post(loginRequired, adminRequired, createItem);

router.route("/featured").get(getFeatured);

router
    .route("/:item_id")
    .get(getItem)
    .patch(loginRequired, adminRequired, updateItem)
    .delete(loginRequired, adminRequired, deleteItem);

export default routerCombiner => {
    routerCombiner.use("/items", router);
};
