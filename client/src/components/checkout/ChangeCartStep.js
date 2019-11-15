import React from "react";

import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { useCartContents } from "src/selectors/shoppingCart";
import { CartItem } from "src/components/shoppingCart/CartItem";
import { setCurrentOrderItems } from "src/actions/orders";
import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles(() => ({
    grid: {
        maxHeight: "80vh",
        overflowY: "auto"
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
            <Button onClick={moveToNextStep}>Next</Button>
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
        </>
    );
};

//TODO Total fee
