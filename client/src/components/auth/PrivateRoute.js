import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";

export default ({ children, ...props }) => {
    const [isAuthenticated, authRefresh] = useSelector(({ authentication }) => [
        authentication.user,
        authentication.refreshing
    ]);

    if (authRefresh) {
        return <CircularProgress />;
    } else if (!isAuthenticated) {
        return (
            <Redirect
                to={{ pathname: "/login", state: { redirectTo: props.path } }}
            />
        );
    }

    return <Route {...props}>{children}</Route>;
};
