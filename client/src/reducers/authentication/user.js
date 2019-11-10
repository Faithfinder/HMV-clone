import { user } from "src/actions/types";

const initialState = null;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case user.logInResponse:
        case user.logOutResponse:
        case user.checkResponse:
            return payload;

        default:
            return state;
    }
};
