import React from "react";

import Facebook from "../Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartButton from "./ShoppingCartButton";

export default () => {
    return (
        <>
            <Facebook />

            <ShoppingCartButton />
        </>
    );
};
