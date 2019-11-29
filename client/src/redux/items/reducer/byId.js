import items from "src/redux/items/types";
import reviews from "src/redux/reviews/types";
import shoppingCart from "src/redux/shoppingCart/types";

import produce from "immer";

const initialState = {};

export default produce((draft, { type, payload, error }) => {
    if (error) return;
    switch (type) {
        case items.fetchResponse:
            payload.forEach(element => {
                draft[element._id] = element;
            });
            return;
        case shoppingCart.checkResponse:
            payload.items.forEach(element => {
                draft[element._id] = element;
            });
            return;
        case items.fetchSpecificResponse:
            draft[payload._id] = payload;
            return;
        case reviews.createReviewResponse:
            draft[payload.itemId].reviews.push(payload.review);
            return;
        case reviews.deleteReviewResponse:
            draft[payload.itemId].reviews = draft[
                payload.itemId
            ].reviews.filter(review => review._id !== payload.reviewId);
            return;
        default:
            return draft;
    }
}, initialState);
