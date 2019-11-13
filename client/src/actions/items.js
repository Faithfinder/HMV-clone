import { items } from "src/types/actions";
import axios from "axios";

export const fetchItems = filter => async dispatch => {
    let errored = false;
    let payload;
    try {
        dispatch({ type: items.fetchRequest });
        const response = await axios.get("/api/items", {
            params: filter
        });
        if (response.status === 200) {
            payload = response.data;
        } else {
            errored = true;
            payload = new Error(`Couldn't fetch items: ${response.statusText}`);
        }
    } catch (error) {
        errored = true;
        payload = error;
    }
    dispatch({ type: items.fetchResponse, payload, error: errored });
};

export const fetchFeatured = () => async dispatch => {
    let errored = false;
    let payload;
    try {
        dispatch({ type: items.fetchRequest });
        const response = await axios.get("/api/items/featured");
        if (response.status === 200) {
            payload = response.data;
        } else {
            errored = true;
            payload = new Error(
                `Couldn't fetch featured items: ${response.statusText}`
            );
        }
    } catch (error) {
        errored = true;
        payload = error;
    }
    dispatch({ type: items.fetchResponse, payload, error: errored });
};
