import express from "express";
const router = express.Router({ mergeParams: true });

import { loginRequired, adminRequired } from "../middleware/auth";

import {
    createReview,
    deleteReview,
    updateReview
} from "../handlers/routes/reviews";

router.route("/").post(loginRequired, createReview);

router
    .route("/:review_id")
    .patch(loginRequired, adminRequired, updateReview)
    .delete(loginRequired, adminRequired, deleteReview);

export default routerCombiner => {
    routerCombiner.use("/items/:item_id/reviews", router);
};
