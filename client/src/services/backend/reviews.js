import axios from "axios";

const createReview = async (itemId, review) => {
    const response = await axios.post(`/api/items/${itemId}/reviews`, review);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Couldn't post review: ${response.statusText}`);
    }
};

const deleteReview = async (itemId, reviewId) => {
    const response = await axios.delete(
        `/api/items/${itemId}/reviews/${reviewId}`
    );
    if (response.status === 204) {
        return response.data;
    } else {
        throw new Error(`Couldn't delete review: ${response.statusText}`);
    }
};

export default { createReview, deleteReview };
