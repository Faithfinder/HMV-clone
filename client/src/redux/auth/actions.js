import authTypes from "src/redux/auth/types";
import { createAction } from "redux-actions";
import authBackend from "src/services/backend/auth";

export const authRequest = () => {
    return {
        type: authTypes.authRequest
    };
};

export const logIn = user => ({ type: authTypes.logInResponse, payload: user });

export const logOut = user => async dispatch => {
    let payload;
    dispatch(authRequest());
    try {
        payload = await authBackend.logOut();
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(authTypes.logOutResponse)(payload));
};

export const checkLogIn = () => async dispatch => {
    let payload;
    dispatch(authRequest());
    try {
        payload = await authBackend.checkLogIn();
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(authTypes.checkResponse)(payload));
};
