import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Facebook from "../auth/Facebook";

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
    const location = useLocation();
    let redirectTo;
    if (location.state) {
        redirectTo = location.state.redirectTo || "/";
    }

    const [isAuthenticated] = useSelector(({ authentication }) => [
        authentication.user,
        authentication.refreshing
    ]);

    if (isAuthenticated) {
        return <Redirect to={redirectTo} />;
    }
    return (
        <Container>
            <Paper className={classes.paper}>
                <div>
                    <Typography variant="h3" align="center">
                        Please log in below
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        align="center">
                        There is no need to register separately, we'll just get
                        your email from Facebook
                    </Typography>
                </div>

                <Facebook />
            </Paper>
        </Container>
    );
};
