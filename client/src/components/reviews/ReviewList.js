import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ReviewItem from "src/components/reviews/ReviewItem";
import { useCurrentUser } from "src/redux/auth/selectors";
import CurrentUserReviewZone from "src/components/reviews/CurrentUserReviewZone";

const useStyles = makeStyles(theme => ({
    verticalSpacing: {
        margin: theme.spacing(2, 0)
    }
}));

const ReviewList = ({ reviews }) => {
    const classes = useStyles();
    const [currentUser] = useCurrentUser();

    const extractCurrentUserReview = (result, review) => {
        const currentUserIsAuthor =
            review.author._id === (currentUser ? currentUser.userId : "");
        if (currentUserIsAuthor) {
            result[0] = review;
        } else {
            result[1].push(review);
        }
        return result;
    };

    const [currentUserReview, otherReviews] = (
        reviews || []
    ).reduce(extractCurrentUserReview, [null, []]);

    const renderNoReviews = () => {
        if (!(reviews && reviews.length)) {
            return (
                <Typography variant="subtitle1">
                    It seems no one has reviewed this title yet. Be first!
                </Typography>
            );
        } else if (!otherReviews.length) {
            return (
                <Typography variant="subtitle1">
                    There are no other reviews
                </Typography>
            );
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
            <CurrentUserReviewZone currentUserReview={currentUserReview} />
            <Typography variant="h6">Reviews:</Typography>
            {renderNoReviews()}
            {otherReviews.map(review => (
                <ReviewItem review={review} key={review._id} />
            ))}
        </Grid>
    );
};

export default ReviewList;
