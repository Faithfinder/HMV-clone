import { createAction } from "redux-actions";

import { reviews } from "src/types/state/actions";
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
