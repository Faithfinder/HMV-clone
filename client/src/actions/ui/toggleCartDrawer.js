import { cart } from "src/types/actions";

export const toggleCartDrawer = drawerOpen => {
    return {
        type: cart.toggleDrawer,
        payload: drawerOpen
    };
};
