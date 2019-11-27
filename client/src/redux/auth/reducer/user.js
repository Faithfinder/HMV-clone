import auth from "src/redux/auth/types";

const initialState = null;

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case auth.logInResponse:
        case auth.logOutResponse:
        case auth.checkResponse:
            return payload;

        default:
            return state;
    }
};
