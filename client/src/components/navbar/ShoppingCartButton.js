import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { checkCart } from "../../actions";
import { useCartCount, useCartContents } from "../../selectors/shoppingCart";

const useStyles = makeStyles(theme => ({
    drawerHeading: {
        margin: "1em"
    }
}));

export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [refreshing] = useSelector(({ shoppingCart }) => [
        shoppingCart.refreshing
    ]);

    const cartCount = useCartCount();
    const cartContents = useCartContents();

    const badgeContent = refreshing ? (
        <CircularProgress color="secondary" size={10} />
    ) : (
        cartCount
    );

    useEffect(() => {
        dispatch(checkCart());
    }, [dispatch]);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = state => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setDrawerOpen(state);
    };

    return (
        <>
            <Badge
                color="primary"
                badgeContent={badgeContent}
                overlap="circle"
                anchorOrigin={{
                    horizontal: "right",
                    vertical: "bottom"
                }}>
                <IconButton variant="contained" onClick={toggleDrawer(true)}>
                    <ShoppingCart />
                </IconButton>
            </Badge>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}>
                <Typography variant="h4" className={classes.drawerHeading}>
                    Shopping Cart
                </Typography>
                <Divider light />
            </Drawer>
        </>
    );
};
