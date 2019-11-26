import React from "react";

import Typography from "@material-ui/core/Typography";

import NewReviewForm from "src/components/reviews/NewReviewForm";
import { useCurrentUser } from "src/selectors/auth";
import ReviewItem from "src/components/reviews/ReviewItem";
import CenteredCircularProgress from "../common/CenteredCircularProgress";

const CurrentUserReviewZone = ({ currentUserReview }) => {
    const [currentUser, refreshing] = useCurrentUser();
    if (refreshing) {
        return <CenteredCircularProgress />;
    } else if (!currentUser) {
        return (
            <Typography variant="subtitle1">
                Please log in to leave a review
            </Typography>
        );
    } else if (currentUserReview) {
        return (
            <>
                <Typography variant="h6">Your review:</Typography>
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
