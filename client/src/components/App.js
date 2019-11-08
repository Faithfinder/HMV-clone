import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";

import history from "../history";
import Navbar from "./navbar/Navbar";
import FeaturedItems from "./items/FeaturedItems";
import { ItemsByCategory } from "./items/ItemsByCategory";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lime from "@material-ui/core/colors/lime";

const theme = createMuiTheme({
    palette: { primary: blueGrey, secondary: lime }
});

const App = () => {
    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <Navbar />
                <FeaturedItems />
                <Container>
                    <ItemsByCategory category="Music" />
                    <ItemsByCategory category="Video" />
                    <ItemsByCategory category="Games" />
                </Container>
            </ThemeProvider>
        </Router>
    );
};

export default App;
