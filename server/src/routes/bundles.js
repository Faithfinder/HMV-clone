import express from "express";
const router = express.Router({ mergeParams: true });

import {
    getBundles,
    createBundle,
    getBundle,
    updateBundle,
    deleteBundle
} from "../handlers/bundle";

router
    .route("/")
    .get(getBundles)
    .post(createBundle);

router
    .route("/:bundle_id")
    .get(getBundle)
    .patch(updateBundle)
    .delete(deleteBundle);

export default router;
