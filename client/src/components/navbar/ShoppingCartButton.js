import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import { checkCart } from "../../actions";
import { useCartCount } from "../../selectors/shoppingCart";
import { CartDrawer } from "../shoppingCart/CartDrawer";
import { toggleDrawer } from "../shoppingCart/helpers";

export default () => {
    const dispatch = useDispatch();

    const [refreshing] = useSelector(({ shoppingCart }) => [
        shoppingCart.refreshing
    ]);

    const cartCount = useCartCount();

    const badgeContent = refreshing ? (
        <CircularProgress color="secondary" size={10} />
    ) : (
        cartCount
    );

    useEffect(() => {
        dispatch(checkCart());
    }, [dispatch]);

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
            <CartDrawer />
        </>
    );
};
