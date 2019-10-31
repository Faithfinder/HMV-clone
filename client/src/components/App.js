import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import io from "socket.io-client";
import axios from "axios";
import Facebook from "./Facebook";
import history from "../history";

const socket = io();

const App = () => {
    const [text, setText] = useState("Meh");
    axios.get("/api").then(result => setText(result.data));

    return (
        <Router history={history}>
            Text is: {text} Not needed
            <Facebook socket={socket}></Facebook>
        </Router>
    );
};

export default App;
