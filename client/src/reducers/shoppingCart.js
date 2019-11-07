import { combineReducers } from "redux";
import {
    CART_ADD_REQUEST,
    CART_ADD_RESPONSE,
    CART_CHECK_REQUEST,
    CART_CHECK_RESPONSE
} from "../actions/types";

const contents = (state = {}, { type, payload, error }) => {
    switch (type) {
        case CART_ADD_RESPONSE:
        case CART_CHECK_RESPONSE:
            if (!error) {
                return payload;
            }
            return state;
        default:
            return state;
    }
};

const refreshing = (state = true, { type }) => {
    switch (type) {
        case CART_ADD_REQUEST:
        case CART_CHECK_REQUEST:
            return true;
        default:
            return false;
    }
};

export default combineReducers({ contents, refreshing });
