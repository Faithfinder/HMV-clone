import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { logIn, logOut, checkLogIn } from "../actions";

import Button from "react-bootstrap/Button";

import "./Facebook.css";

export default ({ socket }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

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

    const getButtonText = () => {
        if (user) {
            return (
                <>
                    {user.email} <FontAwesomeIcon icon={faTimes} />
                </>
            );
        } else {
            return "Continue with Facebook";
        }
    };

    const buttonText = getButtonText();

    return (
        <Button className="facebook" onClick={user ? cancelAuth : startAuth}>
            <FontAwesomeIcon icon={faFacebookSquare} /> {buttonText}
        </Button>
    );
};
