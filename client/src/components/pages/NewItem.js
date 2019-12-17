import React from "react";

import Typography from "@material-ui/core/Typography";

import useQuery from "src/util/useQuery";
import ItemForm from "src/components/items/ItemForm";
import Item from "src/types/Item";

const NewItem = () => {
    const { category } = useQuery();

    const postItem = formData => {
        console.log(formData);
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
