import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { logIn, logOut, checkLogIn, authRequest } from "src/redux/auth/actions";
import { useCurrentUser } from "src/redux/auth/selectors";
import socket from "src/services/socket";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4267b2"
        }
    }
});

export default () => {
    const dispatch = useDispatch();
    const [user, authRefresh] = useCurrentUser();

    useEffect(() => {
        dispatch(checkLogIn());
    }, [dispatch]);

    const openPopup = () => {
        const width = 600,
            height = 600;
        const left = window.innerWidth / 2 - width / 2;
        const top = window.innerHeight / 2 - height / 2;
        const url =
            window.location.origin + `/api/auth/facebook?socketId=${socket.id}`;

        return window.open(
            url,
            "auth",
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
        );
    };

    const startAuth = () => {
        dispatch(authRequest());
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

    if (authRefresh) {
        return <CircularProgress color="secondary" />;
    } else if (user) {
        return (
            <ThemeProvider theme={theme}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={cancelAuth}
                    startIcon={<FontAwesomeIcon icon={faFacebookSquare} />}
                    endIcon={<FontAwesomeIcon icon={faTimes} />}
                >
                    {user.email}
                </Button>
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={theme}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={startAuth}
                    startIcon={<FontAwesomeIcon icon={faFacebookSquare} />}
                >
                    Continue with Facebook
                </Button>
            </ThemeProvider>
        );
    }
};
