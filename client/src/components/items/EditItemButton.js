import React from "react";
import { useHistory } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";

const NewItemButton = ({ itemId }) => {
    const history = useHistory();

    return (
        <Tooltip title="Edit item">
            <IconButton onClick={() => history.push(`/items/${itemId}/edit`)}>
                <EditIcon />
            </IconButton>
        </Tooltip>
    );
};

export default NewItemButton;
