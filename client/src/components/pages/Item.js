import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { fetchItem } from "src/actions/items";
import { useItem } from "src/selectors/items";
import CenteredCircularProgress from "src/components/common/CenteredCircularProgress";

const useStyles = makeStyles(theme => ({
    title: {
        marginTop: "1em"
    }
}));

const FullCategory = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { itemId } = useParams();
    const item = useItem(itemId);

    useEffect(() => {
        dispatch(fetchItem(itemId));
    }, [dispatch, itemId]);

    console.log(item);
    if (!item) return <CenteredCircularProgress />;

    return (
        <>
            <Typography variant="h4" className={classes.title}>
                {item.title}
            </Typography>
        </>
    );
};

export default FullCategory;
