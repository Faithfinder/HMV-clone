import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ReviewItem from "src/components/reviews/ReviewItem";
import NewReviewForm from "src/components/reviews/NewReviewForm";
import { useCurrentUser } from "src/selectors/auth";

const useStyles = makeStyles(theme => ({
    verticalSpacing: {
        margin: theme.spacing(2, 0)
    }
}));

const ReviewList = ({ reviews }) => {
    const classes = useStyles();
    const [currentUser, refreshing] = useCurrentUser();
    const displayedReviews = reviews || [];
    const [currentUserReview, otherReviews] = displayedReviews.reduce(
        (result, review) => {
            if (review.author._id === currentUser ? currentUser.userId : "") {
                result[0] = review;
            } else {
                result[1].push(review);
            }
            return result;
        },
        [null, []]
    );

    const renderNoReviews = () => {
        if (!displayedReviews.length) {
            return (
                <Typography variant="subtitle1">
                    It seems no one has reviewed this title yet. Be first!
                </Typography>
            );
        }
    };

    const renderPostOrEditReview = () => {
        if (refreshing) {
            return "Wait";
        } else if (!currentUser) {
            return (
                <Typography variant="subtitle1">
                    Please log in to leave a review
                </Typography>
            );
        } else if (currentUserReview) {
            return "Edit form";
        } else {
            return <NewReviewForm />;
        }
    };

    return (
        <Grid
            container
            item
            direction="column"
            spacing={2}
            className={classes.verticalSpacing}
        >
            <Typography variant="h6">Reviews:</Typography>
            {renderPostOrEditReview()}
            {renderNoReviews()}
            {otherReviews.map(review => (
                <ReviewItem review={review} key={review._id} />
            ))}
        </Grid>
    );
};

export default ReviewList;
