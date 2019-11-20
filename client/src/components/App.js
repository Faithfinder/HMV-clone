import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import {
    createMuiTheme,
    ThemeProvider,
    makeStyles
} from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Container from "@material-ui/core/Container";

import history from "src/history";
import Navbar from "src/components/navbar/Navbar";
import { PageNotFound } from "src/components/pages/PageNotFound";
import Home from "src/components/pages/Home";
import Login from "src/components/pages/Login";
import Checkout from "src/components/pages/Checkout";
import FullCategory from "src/components/pages/FullCategory";
import Item from "src/components/pages/Item";

const theme = createMuiTheme({
    palette: { primary: blueGrey, secondary: { main: "#7cb342" } }
});

const useStyles = makeStyles(() => ({
    mainContent: {
        flex: "1 0 auto",
        display: "flex",
        flexFlow: "column nowrap"
    }
}));

const App = () => {
    const classes = useStyles();

    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Container className={classes.mainContent}>
                    <Switch>
                        <Route path="/items/:itemId" exact>
                            <Item />
                        </Route>
                        <Route path="/categories/:categoryName" exact>
                            <FullCategory />
                        </Route>
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
                </Container>
            </ThemeProvider>
        </Router>
    );
};

export default App;
