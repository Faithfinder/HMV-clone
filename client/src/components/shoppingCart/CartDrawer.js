import React from "react";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

import { toggleDrawer } from "./helpers";
import { useCartContents } from "../../selectors/shoppingCart";

const useStyles = makeStyles(theme => ({
    drawerHeading: {
        margin: "1em"
    }
}));

export const CartDrawer = () => {
    const classes = useStyles();
    const [drawerOpen] = useSelector(({ ui }) => [ui.cartDrawerOpen]);

    const cartContents = useCartContents();

    return (
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Typography variant="h4" className={classes.drawerHeading}>
                Shopping Cart
            </Typography>
            <Divider light />
            <ul>
                {cartContents.map(item => {
                    return (
                        <li>{`${item.title}, ${item.price}: ${item.amount}`}</li>
                    );
                })}
            </ul>
            <Button color="primary" variant="contained">
                Proceed to checkout
            </Button>
        </Drawer>
    );
};
