import { createAction } from "redux-actions";

import { items as itemsTypes } from "src/types/state/actions";
import itemsBackend from "src/services/backend/items";

export const fetchItems = filter => async dispatch => {
    let payload;
    dispatch({ type: itemsTypes.fetchRequest });
    try {
        payload = await itemsBackend.fetchFiltered(filter);
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(itemsTypes.fetchResponse)(payload));
};

export const fetchItem = itemId => async dispatch => {
    let payload;
    dispatch({ type: itemsTypes.fetchSpecificRequest });
    try {
        payload = await itemsBackend.fetchItem(itemId);
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(itemsTypes.fetchSpecificResponse)(payload));
};

export const fetchFeatured = () => async dispatch => {
    let payload;
    try {
        dispatch({ type: itemsTypes.fetchRequest });
        payload = await itemsBackend.fetchFeatured();
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(itemsTypes.fetchResponse)(payload));
};
