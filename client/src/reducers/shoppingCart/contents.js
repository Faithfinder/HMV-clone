import { cart, user } from "src/types/state/actions";

export default (state = {}, { type, payload, error }) => {
    switch (type) {
        case cart.setResponse:
        case cart.checkResponse:
            if (!error) {
                return payload;
            }
            return state;
        case user.logOutResponse:
            return {};
        default:
            return state;
    }
};
