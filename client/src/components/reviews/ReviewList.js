import React from "react";

import ReviewItem from "src/components/reviews/ReviewItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ReviewList = ({ reviews }) => {
    const displayedReviews = reviews || [];
    return (
        <Grid container item direction="column" spacing={2}>
            <Typography variant="h6">Reviews:</Typography>
            {displayedReviews.map(review => (
                <ReviewItem review={review} key={review._id} />
            ))}
        </Grid>
    );
};

export default ReviewList;
