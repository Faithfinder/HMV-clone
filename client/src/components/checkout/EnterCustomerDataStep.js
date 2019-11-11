import React from "react";
import PrivateRoute from "src/components/auth/PrivateRoute";

export default () => {
    return (
        <PrivateRoute path="/checkout" currentStep={1}>
            There be customer data redacting
        </PrivateRoute>
    );
};
