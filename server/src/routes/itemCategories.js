import express from "express";
const router = express.Router({ mergeParams: true });

import {
    getItemCategories,
    getItemCategory,
    createItemCategory,
    deleteItemCategory,
    updateItemCategory
} from "../handlers/itemCategories";

router
    .route("/")
    .get(getItemCategories)
    .post(createItemCategory);

router
    .route("/:itemCategory_id")
    .get(getItemCategory)
    .patch(updateItemCategory)
    .delete(deleteItemCategory);

export default router;
