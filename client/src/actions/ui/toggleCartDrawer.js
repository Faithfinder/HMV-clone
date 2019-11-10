import { cart } from "src/actions/types";

export const toggleCartDrawer = drawerOpen => {
    return {
        type: cart.toggleDrawer,
        payload: drawerOpen
    };
};
