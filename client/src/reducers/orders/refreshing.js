import { orders } from "src/types/state/actions";

export default (state = false, { type }) => {
    switch (type) {
        // case cart.setRequest:
        // case cart.checkRequest:
        //     return true;
        // case cart.setResponse:
        // case cart.checkResponse:
        //     return false;
        default:
            return state;
    }
};
