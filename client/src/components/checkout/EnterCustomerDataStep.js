import React from "react";
import PrivateRoute from "src/components/auth/PrivateRoute";

export default ({ currentStep }) => {
    return (
        <PrivateRoute path="/checkout" currentStep={currentStep}>
            There be customer data redacting
        </PrivateRoute>
    );
};
