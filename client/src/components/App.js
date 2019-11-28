import React from "react";
import { Router, Switch } from "react-router-dom";
import ErrorBoundary from "react-error-boundary";

import {
    createMuiTheme,
    ThemeProvider,
    makeStyles
} from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import Container from "@material-ui/core/Container";

import history from "src/history";
import Navbar from "src/components/navbar/Navbar";
import routes from "src/components/routes";
import Route from "src/components/auth/Route";

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
                <ErrorBoundary>
                    <Container className={classes.mainContent}>
                        <Switch>
                            {routes.map(route => (
                                <Route key={route.path} {...route} />
                            ))}
                        </Switch>
                    </Container>
                </ErrorBoundary>
            </ThemeProvider>
        </Router>
    );
};

export default App;
