import { LOG_IN, LOG_OUT, CHECK_LOG_IN } from "../actions/types";
import axios from "axios";

export const logIn = user => ({ type: LOG_IN, payload: user });

export const logOut = user => async dispatch => {
    const { status } = await axios.post("api/auth/logout");
    if (status === 204) {
        dispatch({ type: LOG_OUT, payload: null });
    }
};

export const checkLogIn = () => async dispatch => {
    const { data: payload } = await axios.get("/api/auth/check");

    dispatch({ type: CHECK_LOG_IN, payload });
};
