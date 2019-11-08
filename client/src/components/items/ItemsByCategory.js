import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { fetchItems } from "../../actions/items";
import ItemCard from "./ItemCard";

export const ItemsByCategory = ({ category }) => {
    const dispatch = useDispatch();
    const [items] = useSelector(state => [Object.values(state.items)]);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    return (
        <>
            <Typography variant="h4">{category}</Typography>
            <Grid container justify="space-evenly" spacing={0}>
                {items.map(item => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </Grid>
        </>
    );
};
