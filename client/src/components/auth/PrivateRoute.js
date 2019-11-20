import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import CenteredCircularProgress from "src/components/common/CenteredCircularProgress";

export default ({ children, path, ...props }) => {
    const [isAuthenticated, authRefresh] = useSelector(({ authentication }) => [
        authentication.user,
        authentication.refreshing
    ]);

    if (authRefresh) {
        return <CenteredCircularProgress />;
    } else if (!isAuthenticated) {
        return (
            <Redirect
                to={{ pathname: "/login", state: { redirectTo: path, redirectedProps: props } }}
            />
        );
    }

    return <Route {...props}>{children}</Route>;
};
