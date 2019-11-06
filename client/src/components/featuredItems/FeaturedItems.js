import React, { useState, useEffect } from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    Dot,
    Image
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import axios from "axios";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    wrapper: {
        position: "relative"
    },
    navButton: {
        position: "absolute",
        top: 0,
        height: "100%",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        border: 0,
        padding: "0 1em",
        "&:hover": {
            backgroundColor: "rgba(0,0,0,0.65)",
            color: "white"
        },
        "&:focus": { backgroundColor: "rgba(0,0,0,0.65)", outline: 0 },
        "&:active": { backgroundColor: "rgba(0,0,0,1)" }
    },
    backButton: {
        left: 0
    },
    nextButton: {
        right: 0
    },
    dots: {
        position: "absolute",
        bottom: "0",
        width: "100%",
        boxSizing: "border-box",
        textAlign: "center",
        padding: "1em"
    },
    dot: {
        height: "0.5em",
        width: "0.5em",
        border: 0,
        borderRadius: "0.25em",
        margin: "0.1em",
        backgroundColor: "lightgray",
        "&:disabled": { backgroundColor: "darkgray" }
    },
    caption: {
        position: "absolute",
        width: "100%",
        boxSizing: "border-box",
        textAlign: "center",
        bottom: "0",
        height: "150px",
        color: "white",
        padding: "1em",
        backgroundColor: "rgba(0,0,0, 0.50)"
    },
    addToCart: {
        margin: "1em"
    }
}));

const FeaturedItems = () => {
    const classes = useStyles();
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const fetchedItems = await axios.get("/api/items/featured");
            setItems(fetchedItems.data);
        })();
    }, []);

    if (!items.length) return null;

    return (
        <CarouselProvider
            naturalSlideWidth={16}
            naturalSlideHeight={4}
            totalSlides={items.length}
            hasMasterSpinner
            infinite>
            <div className={classes.wrapper}>
                <Slider>
                    {items.map((item, index) => {
                        return (
                            <Slide key={item._id} index={index}>
                                <Image
                                    hasMasterSpinner={true}
                                    src={item.featured.image}
                                    alt={item.title}
                                />
                                <div className={classes.caption}>
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        display="block"
                                        gutterBottom>
                                        {item.featured.caption}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        className={classes.addToCart}>
                                        Add to cart
                                    </Button>
                                </div>
                            </Slide>
                        );
                    })}
                </Slider>

                <ButtonBack
                    className={classes.backButton + " " + classes.navButton}>
                    <ArrowBackIos />
                </ButtonBack>
                <ButtonNext
                    className={classes.nextButton + " " + classes.navButton}>
                    <ArrowForwardIos />
                </ButtonNext>
                <div className={classes.dots}>
                    {items.map((item, index) => {
                        return (
                            <Dot
                                key={item._id}
                                slide={index}
                                className={classes.dot}
                            />
                        );
                    })}
                </div>
            </div>
        </CarouselProvider>
    );
};

export default FeaturedItems;
