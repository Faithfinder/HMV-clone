import express from "express";
const router = express.Router({ mergeParams: true });

import { loginRequired, adminRequired } from "../middleware/auth";

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
    .post(loginRequired, adminRequired, createBundle);

router
    .route("/:bundle_id")
    .get(getBundle)
    .patch(loginRequired, adminRequired, updateBundle)
    .delete(loginRequired, adminRequired, deleteBundle);

export default router;
