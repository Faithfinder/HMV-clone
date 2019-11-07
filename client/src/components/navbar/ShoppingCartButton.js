import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

import { checkCart } from "../../actions";

export default () => {
    const dispatch = useDispatch();

    const [shoppingCart] = useSelector(state => [state.shoppingCart]);

    useEffect(() => {
        dispatch(checkCart());
    }, [dispatch]);

    return (
        <Badge
            color="primary"
            badgeContent={Object.keys(shoppingCart).length}
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
