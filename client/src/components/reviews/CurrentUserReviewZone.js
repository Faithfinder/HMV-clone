import React from "react";

import Typography from "@material-ui/core/Typography";

import NewReviewForm from "src/components/reviews/NewReviewForm";
import { useCurrentUser } from "src/selectors/auth";
import ReviewItem from "src/components/reviews/ReviewItem";

const CurrentUserReviewZone = ({ currentUserReview }) => {
    const [currentUser, refreshing] = useCurrentUser();
    if (refreshing) {
        return "Wait";
    } else if (!currentUser) {
        return (
            <Typography variant="subtitle1">
                Please log in to leave a review
            </Typography>
        );
    } else if (currentUserReview) {
        return (
            <>
                Your review:
                <ReviewItem
                    review={currentUserReview}
                    key={currentUserReview._id}
                />
            </>
        );
    } else {
        return <NewReviewForm />;
    }
};

export default CurrentUserReviewZone;
