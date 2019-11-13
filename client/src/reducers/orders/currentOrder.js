import { orders } from "src/types/state/actions";
import Order from "src/types/state/Order";

const initialState = new Order();

export default (state = initialState, { type, payload, error }) => {
    switch (type) {
        // case cart.setResponse:
        // case cart.checkResponse:
        //     if (!error) {
        //         return payload;
        //     }
        //     return state;
        // case cart.empty:
        //     return {};
        default:
            return state;
    }
};
