import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

import AddToCartButton from "../shoppingCart/AddToCartButton";

const useStyles = makeStyles({
    card: {
        maxWidth: 250,
        margin: "1em",
        display: "flex",
        flexDirection: "column"
    },
    cardActionArea: {
        flexDirection: "column",
        flex: 1
    },
    content: {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "flex-end"
    },
    price: {
        // alignSelf: "flex-end"
    },
    description: {
        flexDirection: "column",
        flexGrow: 1
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
                <CardMedia
                    component="img"
                    image={item.image}
                    title={item.title}
                />
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.description}>
                        {item.description}
                    </Typography>
                    <Typography variant="h6" className={classes.price}>
                        Price: {item.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <AddToCartButton item={item} />
            </CardActions>
        </Grid>
    );
};
