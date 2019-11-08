import { ITEMS_FETCH_REQUEST, ITEMS_FETCH_RESPONSE } from "../actions/types";

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ITEMS_FETCH_RESPONSE:
            const newState = { ...state };
            payload.forEach(element => {
                newState[element._id] = element;
            });
            return newState;

        default:
            return state;
    }
};
