import { Router } from "express";

import items from "./items";
import bundles from "./bundles";
import auth from "./auth";
import orders from "./orders";
import cart from "./cart";
import reviews from "./reviews";

export default () => {
    const routerCombiner = Router();

    items(routerCombiner);
    bundles(routerCombiner);
    auth(routerCombiner);
    orders(routerCombiner);
    cart(routerCombiner);
    reviews(routerCombiner);

    return routerCombiner;
};
