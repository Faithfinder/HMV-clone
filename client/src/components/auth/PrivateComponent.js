import React from "react";
import { useSelector } from "react-redux";

export default ({ children, adminOnly }) => {
    const [isAuthenticated, isAdmin] = useSelector(({ authentication }) => [
        authentication.user,
        authentication.user.isAdmin
    ]);

    if (isAuthenticated && (adminOnly ? isAdmin : true)) return <>{children}</>;
};
