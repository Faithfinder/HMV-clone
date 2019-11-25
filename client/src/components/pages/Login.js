import React from "react";
import { useLocation, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Facebook from "src/components/auth/Facebook";
import { useCurrentUser } from "src/selectors/auth";

const useStyles = makeStyles(theme => ({
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "25vh",
        padding: "3em",
        justifyContent: "space-around"
    }
}));

export default () => {
    const classes = useStyles();
    const { state: locationState = {} } = useLocation();
    const { redirectTo = "/", redirectedProps } = locationState;

    const [isAuthenticated] = useCurrentUser();

    if (isAuthenticated) {
        return (
            <Redirect
                to={{ pathname: redirectTo, state: { redirectedProps } }}
            />
        );
    }
    return (
        <Paper className={classes.paper}>
            <div>
                <Typography variant="h3" align="center">
                    Please log in below
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                >
                    There is no need to register separately, we'll just get your
                    email from Facebook
                </Typography>
            </div>

            <Facebook />
        </Paper>
    );
};
