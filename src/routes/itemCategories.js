import express from "express";
const router = express.Router({ mergeParams: true });

import { loginRequired, adminRequired } from "../middleware/auth";

import {
    getItemCategories,
    getItemCategory,
    createItemCategory,
    deleteItemCategory,
    updateItemCategory,
    getCategoryItems
} from "../handlers/itemCategories";

router
    .route("/")
    .get(getItemCategories)
    .post(loginRequired, adminRequired, createItemCategory);

router
    .route("/:itemCategory_id")
    .get(getItemCategory)
    .patch(loginRequired, adminRequired, updateItemCategory)
    .delete(loginRequired, adminRequired, deleteItemCategory);

router.route("/:itemCategory_id/items").get(getCategoryItems);

export default routerCombiner => {
    routerCombiner.use("/itemCategories", router);
};
