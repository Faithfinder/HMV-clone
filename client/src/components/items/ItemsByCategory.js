import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { fetchItems } from "../../actions/items";
import ItemCard from "./ItemCard";

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1em"
    }
}));

export const ItemsByCategory = ({ category }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [items] = useSelector(state => [Object.values(state.items)]);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    return (
        <>
            <Typography variant="h4" className={classes.title}>{category}</Typography>
            <Grid container justify="space-evenly" spacing={0}>
                {items.slice(0, 4).map(item => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </Grid>
        </>
    );
};
