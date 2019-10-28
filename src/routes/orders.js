import express from "express";
const router = express.Router({ mergeParams: true });

import { loginRequired, adminRequired } from "../middleware/auth";

import {
    getOrder,
    getOrders,
    createOrder,
    updateOrder
} from "../handlers/orders";

router
    .route("/")
    .get(getOrders)
    .post(createOrder);

router
    .route("/:order_id")
    .get(getOrder)
    .patch(loginRequired, adminRequired, updateOrder);

export default router;
