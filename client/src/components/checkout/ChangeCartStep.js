import React from "react";
import Grid from "@material-ui/core/Grid";
import { useCartContents } from "src/selectors/shoppingCart";
import { CartItem } from "src/components/shoppingCart/CartItem";

export default () => {
    const cartContents = useCartContents();
    return (
        <Grid container direction="column">
            {cartContents.map(item => (
                <CartItem key={item.id} item={item} />
            ))}
        </Grid>
    );
};
