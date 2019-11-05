import React from "react";
import { useSelector } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

import ShoppingCart from "@material-ui/icons/ShoppingCart";

export default () => {
    const [shoppingCart] = useSelector(state => [state.shoppingCart]);
    return (
        <Badge
            color="primary"
            badgeContent={shoppingCart.length}
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
