import { cart } from "src/types/actions";

export default (state = true, { type }) => {
    switch (type) {
        case cart.setRequest:
        case cart.checkRequest:
            return true;
        case cart.setResponse:
        case cart.checkResponse:
            return false;
        default:
            return state;
    }
};
