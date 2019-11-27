import auth from "src/redux/auth/types";

export default (state = true, { type }) => {
    switch (type) {
        case auth.authRequest:
            return true;
        case auth.logInResponse:
        case auth.logOutResponse:
        case auth.checkResponse:
            return false;
        default:
            return state;
    }
};
