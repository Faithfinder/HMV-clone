import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
    buttonWrapper: {
        margin: "1em 0",
        alignSelf: "center"
    }
}));

const StepButtons = ({ proceedHandler, previousHandler }) => {
    const classes = useStyles();
    return (
        <Grid container justify="space-around" className={classes.buttonWrapper}>
            <Button
                variant="outlined"
                onClick={previousHandler}
                disabled={!previousHandler}
            >
                Back
            </Button>
            <Button variant="outlined" onClick={proceedHandler}>
                Proceed
            </Button>
        </Grid>
    );
};

export default StepButtons;
