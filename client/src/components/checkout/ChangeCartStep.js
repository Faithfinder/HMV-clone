import React from "react";

import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useCartContents } from "src/redux/shoppingCart/selectors";
import { CartItem } from "src/components/shoppingCart/CartItem";
import StepButtons from "src/components/checkout/StepButtons";
import { setCurrentOrderItems } from "src/actions/orders";

const useStyles = makeStyles(() => ({
    grid: {
        maxHeight: "70vh",
        overflowY: "auto"
    },
    margin: {
        margin: "1em",
        boxSizing: "border-box"
    },
    alignLeft: {
        alignSelf: "flex-start"
    }
}));

export default ({ incrementStep }) => {
    const classes = useStyles();
    const cartContents = useCartContents();

    const total = cartContents.reduce(
        (result, currentItem) =>
            (result += currentItem.price * currentItem.amount),
        0
    );

    const dispatch = useDispatch();

    const confirmItems = () => {
        dispatch(setCurrentOrderItems(cartContents));
        incrementStep();
    };

    return (
        <Grid container direction="column" alignItems="center">
            <Typography variant="h5" component="div" className={classes.margin}>
                Check your cart
            </Typography>
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
            <Typography
                variant="h5"
                component="div"
                className={classes.margin + " " + classes.alignLeft}
            >
                Total: {total}
            </Typography>
            <StepButtons proceedHandler={confirmItems} />
        </Grid>
    );
};
