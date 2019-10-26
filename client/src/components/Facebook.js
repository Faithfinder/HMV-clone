import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

import Button from "react-bootstrap/Button";

import "./Facebook.css";

export default ({ socket }) => {
    const [user, setUser] = useState(undefined);

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
        const response = await axios.post("api/auth/logout");
        if (response.status === 204) {
            setUser(undefined);
        }
    };

    const attachOnAuthnticateToSocket = popup => {
        socket.on("facebook", obj => {
            popup.close();
            setUser(obj.user);
        });
    };

    const getButtonText = () => {
        if (user) {
            return (
                <>
                    {user.emails[0].value} <FontAwesomeIcon icon={faTimes} />
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
