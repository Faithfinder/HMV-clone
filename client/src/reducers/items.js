import { items } from "src/types/state/actions";

import produce from "immer";

const initialState = {};

export default produce((draft, { type, payload }) => {
    switch (type) {
        case items.fetchResponse:
            payload.forEach(element => {
                draft[element._id] = element;
            });
            return;
        default:
            return draft;
    }
}, initialState);
