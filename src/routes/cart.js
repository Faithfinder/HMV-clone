import express from "express";
const router = express.Router({ mergeParams: true });

import { getCart, setCart } from "../handlers/routes/cart";

router
    .route("/")
    .get(getCart)
    .put(setCart);

export default routerCombiner => {
    routerCombiner.use("/cart", router);
};
