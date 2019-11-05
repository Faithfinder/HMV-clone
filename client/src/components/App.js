import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Navbar from "./navbar/Navbar";
// import FeaturedItems from "./featuredItems/FeaturedItems";

const App = () => {
    return (
        <Router history={history}>
            <Navbar />
                {/* <FeaturedItems /> */}
        </Router>
    );
};

export default App;
