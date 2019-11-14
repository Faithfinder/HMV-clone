import React from "react";

import { useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { useCartContents } from "src/selectors/shoppingCart";
import { CartItem } from "src/components/shoppingCart/CartItem";
import { setCurrentOrderItems } from "src/actions/orders";

export default ({ incrementStep }) => {
    const cartContents = useCartContents();

    const dispatch = useDispatch();

    const moveToNextStep = () => {
        dispatch(setCurrentOrderItems());
        incrementStep();
    };

    return (
        <>
            <Button onClick={moveToNextStep}>Next</Button>
            <Grid container direction="column">
                {cartContents.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </Grid>
        </>
    );
};
