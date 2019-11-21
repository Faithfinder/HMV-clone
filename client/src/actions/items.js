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
    let bundledItems;
    dispatch({ type: itemsTypes.fetchSpecificRequest });
    try {
        payload = await itemsBackend.fetchItem(itemId);
        bundledItems = payload.items;
    } catch (error) {
        payload = error;
        bundledItems = error;
    }
    dispatch(createAction(itemsTypes.fetchSpecificResponse)(payload));
    if (bundledItems) {
        dispatch(createAction(itemsTypes.fetchResponse)(bundledItems));
    }
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
