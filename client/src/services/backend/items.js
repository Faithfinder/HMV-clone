import axios from "axios";

const fetchFiltered = async filter => {
    const response = await axios.get("/api/items", {
        params: filter
    });
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Couldn't fetch items: ${response.statusText}`);
    }
};

const fetchFeatured = async () => {
    const response = await axios.get("/api/items/featured");
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(
            `Couldn't fetch featured items: ${response.statusText}`
        );
    }
};

const fetchItem = async itemId => {
    const response = await axios.get(`/api/items/${itemId}`);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Couldn't fetch item: ${response.statusText}`);
    }
};

export default {
    fetchFiltered,
    fetchFeatured,
    fetchItem
};
