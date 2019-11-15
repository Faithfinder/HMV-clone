import React from "react";

import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { useCartContents } from "src/selectors/shoppingCart";
import { CartItem } from "src/components/shoppingCart/CartItem";
import StepButtons from "src/components/checkout/StepButtons";
import { setCurrentOrderItems } from "src/actions/orders";

const useStyles = makeStyles(() => ({
    grid: {
        maxHeight: "80vh",
        overflowY: "auto"
    },
    margin: {
        margin: "1em",
        boxSizing: "border-box"
    }
}));

export default ({ incrementStep }) => {
    const classes = useStyles();
    const cartContents = useCartContents();

    const dispatch = useDispatch();

    const moveToNextStep = () => {
        dispatch(setCurrentOrderItems());
        incrementStep();
    };

    return (
        <>
            <Grid
                container
                direction="column"
                wrap="nowrap"
                className={classes.grid}
            >
                {cartContents.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </Grid>
            <StepButtons proceedHandler={moveToNextStep} />
        </>
    );
};

//TODO Total fee
