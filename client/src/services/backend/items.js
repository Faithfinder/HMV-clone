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

const fetchSingle = async itemId => {
    const response = await axios.get(`/api/items/${itemId}`);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Couldn't fetch item: ${response.statusText}`);
    }
};

const create = async item => {
    const response = await axios.post(`/api/items`, { item });
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(`Couldn't create item: ${response.statusText}`);
    }
};

export default {
    fetchFiltered,
    fetchSingle,
    create,
};
