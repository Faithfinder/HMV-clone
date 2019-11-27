import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { fetchItems } from "src/redux/items/actions";
import { useItemsByCategory } from "src/redux/items/selectors";
import ItemCard from "src/components/items/ItemCard";
import Link from "src/components/common/CombinedLink";

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1em"
    }
}));

export const MainPageCategory = ({ category }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const items = useItemsByCategory(category);

    useEffect(() => {
        dispatch(fetchItems({ category }));
    }, [dispatch, category]);

    return (
        <>
            <Typography variant="h4" className={classes.title}>
                {category}
            </Typography>
            <Link to={`/categories/${category}`}>View all</Link>
            <Grid container justify="space-evenly" spacing={0}>
                {items.slice(0, 4).map(item => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </Grid>
        </>
    );
};

export default MainPageCategory;
