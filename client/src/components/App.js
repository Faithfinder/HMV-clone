import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "../history";
import Navbar from "./navbar/Navbar";

const App = () => {
    return (
        <Router history={history}>
            <Navbar />
        </Router>
    );
};

export default App;
