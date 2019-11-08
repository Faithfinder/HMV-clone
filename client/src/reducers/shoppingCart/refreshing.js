import {
    CART_ADD_REQUEST,
    CART_ADD_RESPONSE,
    CART_CHECK_REQUEST,
    CART_CHECK_RESPONSE
} from "../../actions/types";

export default (state = true, { type }) => {
    switch (type) {
        case CART_ADD_REQUEST:
        case CART_CHECK_REQUEST:
            return true;
        case CART_ADD_RESPONSE:
        case CART_CHECK_RESPONSE:
            return false;
        default:
            return state;
    }
};
