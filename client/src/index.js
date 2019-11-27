import React from "react";
import ReactDOM from "react-dom";
import { Provider, batch } from "react-redux";

import App from "src/components/App";
import store from "src/redux/store";

import { checkLogIn } from "src/redux/auth/actions";
import { checkCart } from "src/redux/shoppingCart/actions";

batch(() => {
    store.dispatch(checkLogIn());
    store.dispatch(checkCart());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
