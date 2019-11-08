import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Drawer from "@material-ui/core/Drawer";

import { checkCart } from "../../actions";
import { useCartCount, useCartContents } from "../../selectors/shoppingCart";

export default () => {
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
                Hi! I need a longer text
            </Drawer>
        </>
    );
};
