import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

import history from "../history";
import Navbar from "./navbar/Navbar";
import { PageNotFound } from "./PageNotFound";
import Home from "./pages/Home";

const theme = createMuiTheme({
    palette: { primary: blueGrey, secondary: { main: "#7cb342" } }
});

const App = () => {
    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route>
                        <PageNotFound />
                    </Route>
                </Switch>
            </ThemeProvider>
        </Router>
    );
};

export default App;
