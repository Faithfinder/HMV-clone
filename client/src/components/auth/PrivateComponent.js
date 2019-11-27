import React from "react";
import { useCurrentUser } from "src/redux/auth/selectors";

const PrivateComponent = ({ children, adminOnly }) => {
    const [currentUser] = useCurrentUser();
    const { userId: isAuthenticated, isAdmin } = currentUser || {};

    const shouldSeeComponent = isAuthenticated && (adminOnly ? isAdmin : true);
    if (shouldSeeComponent) return <>{children}</>;
    return null;
};

export default PrivateComponent;
