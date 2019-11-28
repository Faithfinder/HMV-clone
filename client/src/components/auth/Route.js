import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCurrentUser } from "src/redux/auth/selectors";

import CenteredCircularProgress from "src/components/common/CenteredCircularProgress";
import Unauthorized from "src/components/auth/Unauthorized";

export default ({ children, path, mode, ...props }) => {
    const [isAuthenticated, authRefresh] = useCurrentUser();

    if (authRefresh && mode) {
        return <CenteredCircularProgress />;
    }

    if (!isAuthenticated && mode) {
        return (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { redirectTo: path, redirectedProps: props }
                }}
            />
        );
    }

    if (mode === "admin") {
        return <Unauthorized />;
    }

    return <Route {...props}>{children}</Route>;
};
