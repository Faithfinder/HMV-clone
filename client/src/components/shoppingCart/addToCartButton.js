import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { addToCart } from "../../actions";

const useStyles = makeStyles(theme => ({
    addToCart: {
        margin: "1em"
    }
}));

const addToCartButton = ({ item }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    const handler = () => {
        dispatch(addToCart(item));
    };
    return (
        <Button
            variant="contained"
            size="small"
            className={classes.addToCart}
            onClick={handler}>
            Add to cart
        </Button>
    );
};

export default addToCartButton;
