import { TOGGLE_CART_DRAWER } from "../../actions/types";

const initialState = false;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_CART_DRAWER:
            return payload;

        default:
            return state;
    }
};
