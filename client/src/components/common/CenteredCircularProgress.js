import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
    expand: {
        display: "flex",
        flex: "1 0 auto",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    }
}));

const CenteredCircularProgress = props => {
    const classes = useStyles();

    return (
        <div className={classes.expand}>
            <CircularProgress {...props} />
        </div>
    );
};

export default CenteredCircularProgress;
