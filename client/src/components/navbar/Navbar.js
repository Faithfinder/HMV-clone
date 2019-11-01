import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Facebook from "../Facebook";

export default () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">Media store prototype</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav.Item>
                    <Facebook />
                </Nav.Item>
            </Navbar.Collapse>
        </Navbar>
    );
};
