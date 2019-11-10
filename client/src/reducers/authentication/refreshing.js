import { user } from "src/actions/types";

export default (state = true, { type }) => {
    switch (type) {
        case user.authRequest:
            return true;
        case user.logInResponse:
        case user.logOutResponse:
        case user.checkResponse:
            return false;
        default:
            return state;
    }
};
