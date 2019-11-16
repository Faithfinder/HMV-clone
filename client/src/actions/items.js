import { createAction } from "redux-actions";

import { items } from "src/types/state/actions";
import backend from "src/services/backend/items";

export const fetchItems = filter => async dispatch => {
    let payload;
    dispatch({ type: items.fetchRequest });
    try {
        payload = await backend.fetchFiltered(filter);
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(items.fetchResponse)(payload));
};

export const fetchFeatured = () => async dispatch => {
    let payload;
    try {
        dispatch({ type: items.fetchRequest });
        payload = await backend.fetchFeatured();
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(items.fetchResponse)(payload));
};
