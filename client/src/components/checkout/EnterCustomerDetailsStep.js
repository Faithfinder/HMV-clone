import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import PrivateRoute from "src/components/auth/PrivateRoute";
import Message from "src/components/common/Message";
import StepButtons from "src/components/checkout/StepButtons";
import { setCurrentOrderPersonalDetails } from "src/actions/orders";

const useStyles = makeStyles(() => ({
    form: {
        width: "auto",
        padding: "1em"
    },
    margin: {
        margin: "0.5em 0"
    }
}));

export default ({ currentStep, incrementStep, decrementStep }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [emailField, setEmailField] = useState("");
    const [userEmail, userId, orderEmail] = useSelector(state => [
        state.authentication.user.email,
        state.authentication.user.userId,
        state.orders.currentOrder.email
    ]);

    useEffect(() => {
        setEmailField(orderEmail || userEmail);
    }, [orderEmail, userEmail]);

    const confirmPersonalDetails = () => {
        dispatch(setCurrentOrderPersonalDetails(emailField, userId));
        incrementStep();
    };

    return (
        <PrivateRoute path="/checkout" currentStep={currentStep}>
            <Grid container direction="column" alignItems="center">
                <Grid
                    container
                    item
                    direction="column"
                    alignItems="flex-start"
                    justify="space-between"
                    className={classes.form}
                >
                    <Typography
                        variant="h5"
                        component="div"
                        className={classes.margin}
                    >
                        Enter your personal details
                    </Typography>
                    <TextField
                        label="E-mail"
                        placeholder="example@example.com"
                        value={emailField}
                        required
                        className={classes.margin}
                        onChange={event => setEmailField(event.target.value)}
                    />
                </Grid>
                <StepButtons
                    previousHandler={decrementStep}
                    proceedHandler={confirmPersonalDetails}
                />
                <Message>
                    Since this is only a protoype and no actual transactions
                    will be made, to complete the checkout process we only need
                    your email
                </Message>
            </Grid>
        </PrivateRoute>
    );
};
