import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import UILink from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

import Link from "src/components/common/CombinedLink";

const useStyles = makeStyles(theme => ({
    margin: { margin: "1em" }
}));

export const PageNotFound = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Container>
            <Typography variant="h3" className={classes.margin}>
                404: Page Not Found
            </Typography>
            <Divider />
            <Typography variant="body1" className={classes.margin}>
                Sorry, but it seems the page you were looking for is no longer
                here. <br />
                You can start again from{" "}
                <Link to="/" color="secondary">
                    the main page
                </Link>{" "}
                or return to the{" "}
                <UILink
                    component="button"
                    onClick={history.goBack}
                    variant="body1"
                    color="secondary">
                    previous page
                </UILink>
            </Typography>
        </Container>
    );
};
