import { createAction } from "redux-actions";

import reviews from "src/redux/reviews/types";
import reviewsBackend from "src/services/backend/reviews";

export const createReview = (itemId, review) => async dispatch => {
    let payload;
    dispatch({ type: reviews.createReviewRequest });
    try {
        const createdReview = await reviewsBackend.createReview(itemId, review);
        payload = { review: createdReview, itemId };
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(reviews.createReviewResponse)(payload));
};

export const deleteReview = (itemId, reviewId) => async dispatch => {
    let payload;
    dispatch({ type: reviews.deleteReviewRequest });
    try {
        await reviewsBackend.deleteReview(itemId, reviewId);
        payload = { reviewId, itemId };
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(reviews.deleteReviewResponse)(payload));
};
