import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import Facebook from "../Facebook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartButton from "./ShoppingCartButton";

export default () => {
    return (
        <Navbar expand="md">
            <Navbar.Brand href="/">Media store prototype</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Facebook />
                <Form inline>
                    <InputGroup className="mx-2">
                        <FormControl placeholder="I don't work" />
                        <InputGroup.Append>
                            <Button variant="secondary">
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                <ShoppingCartButton />
            </Navbar.Collapse>
        </Navbar>
    );
};
