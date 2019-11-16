import { cart, user } from "src/types/state/actions";

export default (state = {}, { type, payload, error }) => {
    if (error) return state;
    switch (type) {
        case cart.setResponse:
        case cart.checkResponse:
            return payload;
        case user.logOutResponse:
            return {};
        default:
            return state;
    }
};
