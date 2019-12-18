import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import ItemForm from "src/components/items/ItemForm";
import { useItem } from "src/redux/items/selectors";
import { fetchItem } from "src/redux/items/actions";

const NewItem = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { itemId } = useParams();

    useEffect(() => {
        dispatch(fetchItem(itemId));
    }, [dispatch, itemId]);

    const item = useItem(itemId);

    const postItem = async formData => {
        console.log(formData);
        history.push(`/items/${itemId}`);
    };

    return (
        <>
            <Typography variant="h2">Edit item</Typography>
            <ItemForm submitAction={postItem} initialItem={item} />
        </>
    );
};

export default NewItem;
