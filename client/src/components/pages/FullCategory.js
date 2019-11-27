import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { fetchItems } from "src/redux/items/actions";
import { useItemsByCategory } from "src/redux/items/selectors";
import ItemCard from "src/components/items/ItemCard";

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1em"
    }
}));

const FullCategory = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { categoryName } = useParams();
    const items = useItemsByCategory(categoryName);

    useEffect(() => {
        dispatch(fetchItems({ category: categoryName }));
    }, [dispatch, categoryName]);

    return (
        <>
            <Typography variant="h4" className={classes.title}>
                {categoryName}
            </Typography>
            <Grid container justify="space-evenly" spacing={0}>
                {items.map(item => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </Grid>
        </>
    );
};

export default FullCategory;
