import { cart } from "../types";

export const toggleCartDrawer = drawerOpen => {
    return {
        type: cart.toggleDrawer,
        payload: drawerOpen
    };
};
