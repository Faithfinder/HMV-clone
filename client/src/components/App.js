import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

import history from "src/history";
import Navbar from "src/components/navbar/Navbar";
import { PageNotFound } from "src/components/pages/PageNotFound";
import PrivateRoute from "src/components/auth/PrivateRoute";
import Home from "src/components/pages/Home";
import Login from "src/components/pages/Login";
import Checkout from "src/components/pages/Checkout";

const theme = createMuiTheme({
    palette: { primary: blueGrey, secondary: { main: "#7cb342" } }
});

const App = () => {
    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Switch>
                    <Route path="/checkout" exact>
                        <Checkout />
                    </Route>
                    <Route path="/login" exact>
                        <Login />
                    </Route>
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
