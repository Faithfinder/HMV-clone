import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";

import PrivateRoute from "src/components/auth/PrivateRoute";
import { setCurrentOrderEmail } from "src/actions/orders";

export default ({ currentStep }) => {
    const dispatch = useDispatch();
    const [userEmail, orderEmail] = useSelector(state => [
        state.authentication.user.email,
        state.orders.currentOrder.email
    ]);

    useEffect(() => {
        dispatch(setCurrentOrderEmail(userEmail));
    }, [dispatch, userEmail]);

    return (
        <PrivateRoute path="/checkout" currentStep={currentStep}>
            <TextField
                value={orderEmail}
                onChange={event =>
                    dispatch(setCurrentOrderEmail(event.target.value))
                }
            />
        </PrivateRoute>
    );
};
