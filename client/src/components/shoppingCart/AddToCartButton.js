import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { addToCart } from "src/actions/shoppingCart";

const useStyles = makeStyles(theme => ({
    addToCart: {
        margin: "1em"
    }
}));

const AddToCartButton = ({ item }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handler = () => {
        dispatch(addToCart(item._id));
    };

    const [refreshing] = useSelector(({ shoppingCart }) => [
        shoppingCart.refreshing
    ]);

    return (
        <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.addToCart}
            onClick={handler}
            disabled={refreshing}>
            Add to cart
        </Button>
    );
};

export default AddToCartButton;
