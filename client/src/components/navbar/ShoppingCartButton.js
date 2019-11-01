import React from "react";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export default () => {
    const [shoppingCart] = useSelector(state => [state.shoppingCart]);
    return (
        <Button className="mx-2" variant="success">
            <FontAwesomeIcon icon={faShoppingBasket} />{" "}
            <Badge variant="light">{shoppingCart.length}</Badge>
        </Button>
    );
};
