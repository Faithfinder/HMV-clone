import React from "react";
import { useCurrentUser } from "src/selectors/auth";

export default ({ children, adminOnly }) => {
    const [{ userId: isAuthenticated, isAdmin }] = useCurrentUser();

    if (isAuthenticated && (adminOnly ? isAdmin : true)) return <>{children}</>;
};
