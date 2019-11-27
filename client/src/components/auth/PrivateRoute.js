import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCurrentUser } from "src/redux/auth/selectors";

import CenteredCircularProgress from "src/components/common/CenteredCircularProgress";

export default ({ children, path, ...props }) => {
    const [isAuthenticated, authRefresh] = useCurrentUser();

    if (authRefresh) {
        return <CenteredCircularProgress />;
    } else if (!isAuthenticated) {
        return (
            <Redirect
                to={{
                    pathname: "/login",
                    state: { redirectTo: path, redirectedProps: props }
                }}
            />
        );
    }

    return <Route {...props}>{children}</Route>;
};
