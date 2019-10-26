import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Button from "react-bootstrap/Button";

import "./Facebook.css";

export default ({ socket }) => {
    const [user, setUser] = useState(undefined);
    const [, setPopup] = useState(undefined);

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
        const newPopup = openPopup();
        setPopup(newPopup);
        attachOnAuthnticateToSocket(newPopup);
    };

    const cancelAuth = () => {
        setUser(undefined);
    };

    const attachOnAuthnticateToSocket = newPopup => {
        socket.on("facebook", obj => {
            newPopup.close();
            setUser(obj.user);
        });
    };

    const getButtonText = user => {
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

    const buttonText = getButtonText(user);

    return (
        <Button className="facebook" onClick={user ? cancelAuth : startAuth}>
            <FontAwesomeIcon icon={faFacebookSquare} /> {buttonText}
        </Button>
    );
};
