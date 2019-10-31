import { LOG_IN, LOG_OUT, CHECK_LOG_IN } from "../actions/types";

const initialState = null;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case LOG_IN:
            return payload;
        case LOG_OUT:
            return payload;
        case CHECK_LOG_IN:
            return payload;

        default:
            return state;
    }
};
