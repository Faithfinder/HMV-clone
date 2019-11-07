import { CART_ADD_REQUEST, CART_ADD_RESPONSE } from "../actions/types";

const initialState = {};

export default (state = initialState, { type, payload, error }) => {
    switch (type) {
        case CART_ADD_RESPONSE:
            if (!error) {
                return payload;
            }
            return state;
        default:
            return state;
    }
};
