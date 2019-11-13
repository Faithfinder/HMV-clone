import { items } from "src/types/actions";

const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case items.fetchResponse:
            const newState = { ...state };
            payload.forEach(element => {
                newState[element._id] = element;
            });
            return newState;

        default:
            return state;
    }
};
