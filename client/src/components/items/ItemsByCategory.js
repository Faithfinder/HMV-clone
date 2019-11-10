import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { fetchItems } from "src/actions/items";
import { useItemsByCategory } from "src/selectors/items";
import ItemCard from "src/components/items/ItemCard";

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1em"
    }
}));

export const ItemsByCategory = ({ category }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const items = useItemsByCategory(category);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    return (
        <>
            <Typography variant="h4" className={classes.title}>
                {category}
            </Typography>
            <Grid container justify="space-evenly" spacing={0}>
                {items.slice(0, 4).map(item => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </Grid>
        </>
    );
};
