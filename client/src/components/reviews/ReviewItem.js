import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    grow: {
        flex: "1 0 auto"
    },
    padding: {
        padding: theme.spacing(1)
    }
}));

const ReviewItem = ({ review }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    return (
        <Grid item component={Paper} elevation={0}>
            <Grid container>
                <Typography variant="subtitle2">
                    {review.author.email}
                </Typography>
                <div className={classes.grow} />
                <Rating value={review.rating} readOnly />
            </Grid>
            <Collapse
                collapsedHeight="100px"
                in={expanded}
                className={classes.padding}
            >
                <Typography variant="body2" align="justify">
                    {review.content}
                </Typography>
            </Collapse>
            <Button onClick={() => setExpanded(!expanded)}>
                {expanded ? "Read less" : "Read more"}
            </Button>
            <Divider variant="middle" />
        </Grid>
    );
};

export default ReviewItem;
