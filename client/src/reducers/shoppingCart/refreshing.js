import {
    CART_SET_REQUEST,
    CART_SET_RESPONSE,
    CART_CHECK_REQUEST,
    CART_CHECK_RESPONSE
} from "../../actions/types";

export default (state = true, { type }) => {
    switch (type) {
        case CART_SET_REQUEST:
        case CART_CHECK_REQUEST:
            return true;
        case CART_SET_RESPONSE:
        case CART_CHECK_RESPONSE:
            return false;
        default:
            return state;
    }
};
