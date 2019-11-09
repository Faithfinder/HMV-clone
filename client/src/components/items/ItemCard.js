import React from "react";
import ellipsize from "ellipsize";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";

import AddToCartButton from "../shoppingCart/AddToCartButton";

const useStyles = makeStyles({
    card: {
        maxWidth: 250,
        margin: "0.5em",
        display: "flex",
        flexDirection: "column"
    },
    cardActionArea: {
        flexDirection: "column",
        flex: 1
    }
});

const openItem = item => {
    return () => {
        alert(item.title);
    };
};

export default ({ item }) => {
    const classes = useStyles();
    return (
        <Grid item component={Card} className={classes.card}>
            <CardActionArea
                onClick={openItem(item)}
                className={classes.cardActionArea}>
                <Image src={item.image} title={item.title} alt={item.title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {ellipsize(item.title, 50)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {ellipsize(item.description, 150)}
                    </Typography>
                    <Typography variant="h6">Price: {item.price}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <AddToCartButton item={item} />
            </CardActions>
        </Grid>
    );
};
