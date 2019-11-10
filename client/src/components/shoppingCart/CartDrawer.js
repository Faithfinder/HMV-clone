import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

import { toggleDrawer } from "src/components/shoppingCart/helpers";
import { useCartContents } from "src/selectors/shoppingCart";
import { CartItem } from "src/components/shoppingCart/CartItem";

const useStyles = makeStyles(theme => ({
    drawerHeading: {
        margin: "1em",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    margin: { margin: "0.5em 2em" }
}));

export const CartDrawer = () => {
    const classes = useStyles();
    const [drawerOpen] = useSelector(({ ui }) => [ui.cartDrawerOpen]);
    const history = useHistory();

    const cartContents = useCartContents();

    const total = cartContents.reduce(
        (result, currentItem) =>
            (result += currentItem.price * currentItem.amount),
        0
    );

    const proceedToCheckoutHandler = () => {
        history.push("/checkout");
        toggleDrawer(false)();
    };

    return (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <div className={classes.drawerHeading}>
                <Typography variant="h4" component="span">
                    Shopping Cart
                </Typography>
                <IconButton onClick={toggleDrawer(false)}>
                    <Close />
                </IconButton>
            </div>
            <Divider light />
            <Grid container direction="column">
                {cartContents.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </Grid>
            <Typography
                variant="h5"
                component="span"
                className={classes.margin}>
                Total: {total}
            </Typography>
            <Button
                className={classes.margin}
                color="primary"
                variant="contained"
                disabled={!cartContents.length}
                onClick={proceedToCheckoutHandler}>
                Proceed to checkout
            </Button>
        </Drawer>
    );
};
