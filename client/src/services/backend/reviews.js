import axios from "axios";

const createReview = async (itemId, review) => {
    const response = await axios.post(`/api/items/${itemId}/reviews`, review);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Couldn't post review: ${response.statusText}`);
    }
};

export default { createReview };
