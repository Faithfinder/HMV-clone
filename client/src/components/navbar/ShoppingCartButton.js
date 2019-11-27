import React from "react";
import { useSelector } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import { useCartCount } from "src/redux/shoppingCart/selectors";
import { CartDrawer } from "src/components/shoppingCart/CartDrawer";
import { toggleDrawer } from "src/components/shoppingCart/helpers";

export default () => {
    const [refreshing] = useSelector(({ shoppingCart }) => [
        shoppingCart.refreshing
    ]);

    const cartCount = useCartCount();

    const badgeContent = refreshing ? (
        <CircularProgress color="primary" size={10} />
    ) : (
        cartCount
    );

    return (
        <>
            <Badge
                color="secondary"
                badgeContent={badgeContent}
                overlap="circle"
                anchorOrigin={{
                    horizontal: "right",
                    vertical: "bottom"
                }}
            >
                <IconButton variant="contained" onClick={toggleDrawer(true)}>
                    <ShoppingCart />
                </IconButton>
            </Badge>
            <CartDrawer />
        </>
    );
};
