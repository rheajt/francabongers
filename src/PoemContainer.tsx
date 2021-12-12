import { useState } from "react";
import TypeAnimation from "react-type-animation";

const poem = [
    "The Ballad of Franca Bongers",
    "The hero of our song is a wonderful dutch girl",
    "with a passion for plants, we soon will unfurl",
    "a story so grand filled with many twists and turns",
    "and her wonderful life is certainly earned.",

    "First she was a student with a passion for plants",
    "And she also met girls for lots of romance",
    "Eventually becoming a doctor of vegetables",
    "And traveled the world to see all the spectacles",

    "Finally she made her way to Beijing",
    "With Florine on her arm, it wasn't a thing",
    "She met lots of friends, and partied, and prospered",
    "Then along came a baby, and her heart was again conquered",

    "Her family is beautiful, healthy, and wise",
    "But her song isn't done, she continues to thrive",
    "Soon she will leave China, and be free once again,",
    "But wherever she goes I am forever her friend",
];

export const PoemContainer = () => {
    const [line, setLine] = useState(0);

    const next = () => {
        if (line < poem.length - 1) {
            setLine(line + 1);
        }
    };

    const prev = () => {
        if (line > 0) {
            setLine(line - 1);
        }
    };

    console.log(line);
    return (
        <div className="container">
            <div className="btn" onClick={prev} />
            <TypeAnimation sequence={[poem[line], 100]} wrapper="p" />
            <div className="btn" onClick={next} />
        </div>
    );
};
