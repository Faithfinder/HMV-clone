import React from "react";
import { useHistory } from "react-router-dom";
import ellipsize from "ellipsize";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";

import AddToCartButton from "src/components/shoppingCart/AddToCartButton";
import EditItemButton from "src/components/items/EditItemButton";
import PrivateComponent from "../auth/PrivateComponent";

const useStyles = makeStyles({
    card: {
        width: 250,
        margin: "0.5em",
        display: "flex",
        flexDirection: "column"
    },
    cardActionArea: {
        flexDirection: "column",
        flex: 1
    }
});

export default ({ item }) => {
    const classes = useStyles();
    const history = useHistory();
    const openItem = item => {
        return () => {
            history.push(`/items/${item._id}`);
        };
    };

    return (
        <Grid item component={Card} className={classes.card}>
            <CardActionArea
                onClick={openItem(item)}
                className={classes.cardActionArea}
            >
                <Image
                    src={item.image}
                    title={item.title}
                    alt={item.title}
                    style={{
                        width: "250px",
                        height: "250px",
                        paddingTop: "initial"
                    }}
                />
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
                <PrivateComponent adminOnly>
                    <EditItemButton itemId={item._id} />
                </PrivateComponent>
            </CardActions>
        </Grid>
    );
};
