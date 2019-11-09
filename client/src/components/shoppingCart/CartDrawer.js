import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

import { toggleDrawer } from "./helpers";
import { useCartContents } from "../../selectors/shoppingCart";
import { CartItem } from "./CartItem";

const useStyles = makeStyles(theme => ({
    drawerHeading: {
        margin: "1em",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
}));

export const CartDrawer = () => {
    const classes = useStyles();
    const [drawerOpen] = useSelector(({ ui }) => [ui.cartDrawerOpen]);

    const cartContents = useCartContents();

    const total = cartContents.reduce(
        (result, currentItem) =>
            (result += currentItem.price * currentItem.amount),
        0
    );

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
            <Typography variant="h5" component="span">
                Total: {total}
            </Typography>
            <Button
                color="primary"
                variant="contained"
                disabled={!cartContents.length}>
                Proceed to checkout
            </Button>
        </Drawer>
    );
};
