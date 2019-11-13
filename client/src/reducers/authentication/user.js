import { user } from "src/types/state/actions";

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
