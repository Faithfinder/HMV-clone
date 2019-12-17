import React from "react";
import { useHistory } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const NewItemButton = ({ category }) => {
    const history = useHistory();

    return (
        <Tooltip title="Add a new item">
            <IconButton
                onClick={() => history.push(`/items/new?category=${category}`)}
            >
                <AddCircleOutlineIcon />
            </IconButton>
        </Tooltip>
    );
};

export default NewItemButton;
