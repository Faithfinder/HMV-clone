import React, { useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import OAuth from "./Facebook";

const socket = io();

function App() {
    const [text, setText] = useState("Meh");
    axios.get("/api").then(result => setText(result.data));

    return (
        <div>
            Text is: {text} Not needed
            <OAuth socket={socket}></OAuth>
        </div>
    );
}

export default App;
