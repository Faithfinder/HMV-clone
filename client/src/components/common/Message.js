import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    message: {
        width: "50%",
        padding: "1em",
        alignSelf: "center"
    }
}));

const Message = ({ children }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.message}>
            <Typography variant="body2">{children}</Typography>
        </Paper>
    );
};

export default Message;
