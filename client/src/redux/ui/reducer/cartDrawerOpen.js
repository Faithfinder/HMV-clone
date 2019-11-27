import cart from "src/redux/shoppingCart/types";

const initialState = false;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case cart.toggleDrawer:
            return payload;

        default:
            return state;
    }
};
