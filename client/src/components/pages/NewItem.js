import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";

import useQuery from "src/util/useQuery";
import ItemForm from "src/components/items/ItemForm";
import Item from "src/types/Item";
import { createItem } from "src/redux/items/actions";

const NewItem = () => {
    const { category } = useQuery();
    const dispatch = useDispatch();
    const history = useHistory();

    const postItem = formData => {
        dispatch(createItem(formData)).then(item =>
            history.push(`/items/${item._id}`)
        );
    };

    return (
        <>
            <Typography variant="h2">Create a new item</Typography>
            <ItemForm
                submitAction={postItem}
                initialItem={new Item(category)}
            />
        </>
    );
};

export default NewItem;
