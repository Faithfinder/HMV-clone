import { user as userTypes } from "src/types/state/actions";
import { createAction } from "redux-actions";
import authBackend from "src/services/backend/auth";

export const authRequest = () => {
    return {
        type: userTypes.authRequest
    };
};

export const logIn = user => ({ type: userTypes.logInResponse, payload: user });

export const logOut = user => async dispatch => {
    let payload;
    dispatch(authRequest());
    try {
        payload = await authBackend.logOut();
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(userTypes.logOutResponse)(payload));
};

export const checkLogIn = () => async dispatch => {
    let payload;
    dispatch(authRequest());
    try {
        payload = await authBackend.checkLogIn();
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(userTypes.checkResponse)(payload));
};
