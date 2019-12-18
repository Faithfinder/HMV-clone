import { createAction } from "redux-actions";

import itemsTypes from "src/redux/items/types";
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
        payload = await itemsBackend.fetchSingle(itemId);
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

export const createItem = item => async dispatch => {
    let payload;
    dispatch({ type: itemsTypes.createRequest });
    try {
        payload = await itemsBackend.create(item);
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(itemsTypes.createResponse)(payload));
    return Promise.resolve(payload);
};

export const updateItem = item => async dispatch => {
    let payload;
    dispatch({ type: itemsTypes.updateRequest });
    try {
        payload = await itemsBackend.update(item);
    } catch (error) {
        payload = error;
    }
    dispatch(createAction(itemsTypes.updateResponse)(payload));
};
