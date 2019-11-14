import { user as userTypes } from "src/types/state/actions";
import axios from "axios";

export const authRequest = () => {
    return {
        type: userTypes.authRequest
    };
};

export const logIn = user => ({ type: userTypes.logInResponse, payload: user });

export const logOut = user => async dispatch => {
    let errored = false;
    let payload;
    try {
        dispatch(authRequest());
        const response = await axios.post("api/auth/logout");
        if (response.status === 204) {
            dispatch({ type: userTypes.logOutResponse, payload: null });
        } else {
            errored = true;
            payload = new Error(`Couldn't log out: ${response.statusText}`);
        }
    } catch (error) {
        errored = true;
        payload = error;
    }
    if (errored)
        dispatch({ type: userTypes.logOutResponse, payload, error: errored });
};

export const checkLogIn = () => async dispatch => {
    dispatch(authRequest());
    const { data: payload } = await axios.get("/api/auth/check");

    dispatch({ type: userTypes.checkResponse, payload });
};
