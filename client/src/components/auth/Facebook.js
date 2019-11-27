import React from "react";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useCurrentUser } from "src/redux/auth/selectors";
import { logOut } from "src/redux/auth/actions";
import { startAuth } from "src/util/authorizationPopup";

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

    const cancelAuth = async () => {
        dispatch(logOut());
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
