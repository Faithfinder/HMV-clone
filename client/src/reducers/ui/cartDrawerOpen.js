import { cart } from "src/types/actions";

const initialState = false;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case cart.toggleDrawer:
            return payload;

        default:
            return state;
    }
};
