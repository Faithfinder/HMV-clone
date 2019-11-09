import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { addToCart } from "../../actions";

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
    return (
        <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.addToCart}
            onClick={handler}>
            Add to cart
        </Button>
    );
};

export default AddToCartButton;
