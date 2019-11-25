import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ReviewItem from "src/components/reviews/ReviewItem";
import { useCurrentUser } from "src/selectors/auth";
import CurrentUserReviewZone from "src/components/reviews/CurrentUserReviewZone";

const useStyles = makeStyles(theme => ({
    verticalSpacing: {
        margin: theme.spacing(2, 0)
    }
}));

const ReviewList = ({ reviews }) => {
    const classes = useStyles();
    const [currentUser] = useCurrentUser();

    const [currentUserReview, setCurrentUserReview] = useState(null);
    const [otherReviews, setOtherReviews] = useState([]);

    useEffect(() => {
        const otherReviews = [];
        console.log(reviews);
        (reviews || []).forEach(review => {
            const currentUserIsAuthor =
                review.author._id === (currentUser ? currentUser.userId : "");
            if (currentUserIsAuthor) {
                setCurrentUserReview(review);
            } else {
                otherReviews.push(review);
            }
        });
        setOtherReviews(otherReviews);
    }, [reviews, currentUser]);

    const renderNoReviews = () => {
        if (!(reviews && reviews.length)) {
            return (
                <Typography variant="subtitle1">
                    It seems no one has reviewed this title yet. Be first!
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
            <Typography variant="h6">Reviews:</Typography>
            <CurrentUserReviewZone currentUserReview={currentUserReview} />
            {renderNoReviews()}
            {otherReviews.map(review => (
                <ReviewItem review={review} key={review._id} />
            ))}
        </Grid>
    );
};

export default ReviewList;
