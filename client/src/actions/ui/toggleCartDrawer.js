import { TOGGLE_CART_DRAWER } from "../types";

export const toggleCartDrawer = drawerOpen => {
    return {
        type: TOGGLE_CART_DRAWER,
        payload: drawerOpen
    };
};
