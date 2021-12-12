// import React from "react";
import { useState } from "react";
import TypeAnimation from "react-type-animation";
import "./App.css";
import { FlowerSketch } from "./FlowerSketch";

function App() {
    const [stanza, setStanza] = useState(0);
    const poem = [
        "Once upon a time",
        "there was a girl",
        "she lived in beijing",
    ];

    return (
        <>
            <FlowerSketch />

            <div className="container">
                <h1>franca bongers</h1>
                <TypeAnimation sequence={[poem[stanza], 1000]} wrapper="p" />
                <button onClick={() => setStanza(stanza + 1)}>next</button>
            </div>
        </>
    );
}

export default App;
