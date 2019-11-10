import { cart } from "src/actions/types";

export default (state = {}, { type, payload, error }) => {
    switch (type) {
        case cart.setResponse:
        case cart.checkResponse:
            if (!error) {
                return payload;
            }
            return state;
        case cart.empty:
            return {};
        default:
            return state;
    }
};
