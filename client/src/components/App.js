import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";

import history from "../history";
import Navbar from "./navbar/Navbar";
import FeaturedItems from "./items/FeaturedItems";
import { ItemsByCategory } from "./items/ItemsByCategory";

const App = () => {
    return (
        <Router history={history}>
            <Navbar />
            <FeaturedItems />
            <Container>
                <ItemsByCategory category="Music" />
            </Container>
        </Router>
    );
};

export default App;
