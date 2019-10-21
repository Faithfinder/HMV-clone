import React, {useState} from 'react';
import io from 'socket.io-client';
import axios from "axios"

function App() {
  const [text, setText] = useState("Meh");
  axios.get("/api").then(result => setText(result.data));
  return (
    <div>Text is: {text}</div>
  );
}

export default App;
