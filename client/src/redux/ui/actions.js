import cart from "src/redux/shoppingCart/types";

export const toggleCartDrawer = drawerOpen => {
    return {
        type: cart.toggleDrawer,
        payload: drawerOpen
    };
};
