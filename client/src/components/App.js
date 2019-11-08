import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Navbar from "./navbar/Navbar";
import FeaturedItems from "./items/FeaturedItems";
import { ItemsByCategory } from "./items/ItemsByCategory";

const App = () => {
    return (
        <Router history={history}>
            <Navbar />
            <FeaturedItems />
            <ItemsByCategory category="Music" />
        </Router>
    );
};

export default App;
