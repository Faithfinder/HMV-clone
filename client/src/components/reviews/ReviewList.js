import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ReviewItem from "src/components/reviews/ReviewItem";

const useStyles = makeStyles(theme => ({
    verticalSpacing: {
        margin: theme.spacing(2, 0)
    }
}));

const ReviewList = ({ reviews }) => {
    const classes = useStyles();
    const displayedReviews = reviews || [];
    return (
        <Grid
            container
            item
            direction="column"
            spacing={2}
            className={classes.verticalSpacing}
        >
            <Typography variant="h6">Reviews:</Typography>
            {displayedReviews.map(review => (
                <ReviewItem review={review} key={review._id} />
            ))}
        </Grid>
    );
};

export default ReviewList;
