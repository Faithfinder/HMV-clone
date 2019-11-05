import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { logIn, logOut, checkLogIn } from "../actions";

import Button from "@material-ui/core/Button";

import "./Facebook.css";

export default () => {
    const dispatch = useDispatch();
    const [user, socket] = useSelector(state => [state.user, state.socket]);

    useEffect(() => {
        dispatch(checkLogIn());
    }, [dispatch]);

    const openPopup = () => {
        const width = 600,
            height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
        const url = `api/auth/facebook?socketId=${socket.id}`;

        return window.open(
            url,
            "",
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        );
    };

    const startAuth = () => {
        const popup = openPopup();
        attachOnAuthnticateToSocket(popup);
    };

    const cancelAuth = async () => {
        dispatch(logOut());
    };

    const attachOnAuthnticateToSocket = popup => {
        socket.once("facebook", ({ user }) => {
            popup.close();
            dispatch(logIn(user));
        });
    };

    if (user) {
        return (
            <Button
                color="primary"
                variant="contained"
                onClick={cancelAuth}
                startIcon={<FontAwesomeIcon icon={faFacebookSquare} />}
                endIcon={<FontAwesomeIcon icon={faTimes} />}>
                {user.email}
            </Button>
        );
    } else {
        return (
            <Button
                color="primary"
                variant="contained"
                onClick={startAuth}
                startIcon={<FontAwesomeIcon icon={faFacebookSquare} />}>
                Continue with Facebook
            </Button>
        );
    }
};
