import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import { checkCart } from "../../actions";

export default () => {
    const dispatch = useDispatch();

    const [shoppingCart, refreshing] = useSelector(({ shoppingCart }) => [
        shoppingCart.contents,
        shoppingCart.refreshing
    ]);

    const badgeContent = refreshing ? (
        <CircularProgress color="secondary" size={10} />
    ) : (
        Object.keys(shoppingCart).length
    );

    useEffect(() => {
        dispatch(checkCart());
    }, [dispatch]);

    return (
        <Badge
            color="primary"
            badgeContent={badgeContent}
            overlap="circle"
            anchorOrigin={{
                horizontal: "right",
                vertical: "bottom"
            }}>
            <IconButton variant="contained">
                <ShoppingCart />
            </IconButton>
        </Badge>
    );
};
