import React from "react";

import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import StepButtons from "src/components/checkout/StepButtons";

const useStyles = makeStyles(() => ({}));

export default ({ incrementStep, decrementStep }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const moveToNextStep = () => {
        incrementStep();
    };

    return (
        <Grid container direction="column" alignItems="center">
            <Typography variant="h5" component="div" className={classes.margin}>
                Confirm order
            </Typography>
                There be order details
            <StepButtons
                previousHandler={decrementStep}
                proceedHandler={moveToNextStep}
                proceedLabel="Confirm"
            />
        </Grid>
    );
};
