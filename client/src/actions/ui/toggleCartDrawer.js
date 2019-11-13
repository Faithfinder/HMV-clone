import { cart } from "src/types/state/actions";

export const toggleCartDrawer = drawerOpen => {
    return {
        type: cart.toggleDrawer,
        payload: drawerOpen
    };
};
