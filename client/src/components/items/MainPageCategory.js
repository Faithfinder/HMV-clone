import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { fetchItems } from "src/redux/items/actions";
import { useItemsByCategory } from "src/redux/items/selectors";
import ItemCard from "src/components/items/ItemCard";
import Link from "src/components/common/CombinedLink";
import NewItemButton from "src/components/items/NewItemButton";
import PrivateComponent from "src/components/auth/PrivateComponent";

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
            <Grid
                container
                spacing={1}
                className={classes.title}
                alignItems="center"
            >
                <Grid item>
                    <Typography variant="h4">{category}</Typography>
                    <Link to={`/categories/${category}`}>View all</Link>
                </Grid>
                <PrivateComponent adminOnly>
                    <Grid item component={NewItemButton} category={category} />
                </PrivateComponent>
            </Grid>
            <Grid container justify="space-evenly" spacing={0}>
                {items.slice(0, 4).map(item => (
                    <ItemCard key={item._id} item={item} />
                ))}
            </Grid>
        </>
    );
};

export default MainPageCategory;
