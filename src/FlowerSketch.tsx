import Sketch from "react-p5";
import p5Types from "p5";
import useWindowDimensions from "./utils/useWindowDimensions";

const getRand = (r: number) => {
    return Math.floor(Math.random() * r + 1);
};

const getColor = () => {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
};

export const FlowerSketch = () => {
    const { height, width } = useWindowDimensions();

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(width, height).parent(canvasParentRef);
    };

    const deets = [
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        [getRand(width), getRand(height - 200), 200, getColor()],
        // [getRand(width), getRand(height), 200, getColor()],
    ];
    const draw = (p5: p5Types) => {
        p5.background("beige");

        // makeFlower(p5, [width / 2, 100, height - 100, "purple"]);
        deets.forEach((e) => makeFlower(p5, e));
        // makeFlower(p5, getRand(width), getRand(height), 120);
        // makeFlower(p5, deets);
        // makeFlower(p5, 150, 174, 120);
        // makeFlower(p5, 150, 174, 120);
        p5.scale(2);
    };

    return (
        <Sketch
            setup={setup}
            draw={draw}
            mouseMoved={(p5: p5Types) => console.log(p5.mouseX, p5.mouseY)}
        />
    );
};

function makeFlower(p5: p5Types, deets: any[]) {
    const [x, y, h, c] = deets;
    makeLeaves(p5, x, y, h);
    makeStem(p5, x, y, h);
    makeFace(p5, x, y, c);
}

function makeFace(p5: p5Types, x: number, y: number, c: string) {
    makePetals(p5, x, y);

    const color = p5.color(c);
    p5.fill(color);
    p5.ellipse(x, y, 65, 65);
}

function makePetals(p5: p5Types, x: number, y: number) {
    const color = p5.color("gold");
    p5.fill(color);

    p5.ellipse(x - 30, y, 30, 30); // left
    p5.ellipse(x + 30, y, 30, 30); // right
    p5.ellipse(x, y - 30, 30, 30); // bottom
    p5.ellipse(x, y + 30, 30, 30); // top

    p5.ellipse(x - 22, y - 22, 30, 30); // top left
    p5.ellipse(x + 22, y - 22, 30, 30); // top right
    p5.ellipse(x + 22, y + 22, 30, 30); // bottom right
    p5.ellipse(x - 22, y + 22, 30, 30); // bottom left
}

function makeStem(p5: p5Types, x: number, y: number, h: number) {
    const green = p5.color("green");
    p5.fill(green);
    p5.rect(x - 5, y, 10, h);
}

function makeLeaves(p5: p5Types, x: number, y: number, h: number) {
    const green = p5.color("green");
    p5.fill(green);
    y += h;

    p5.quad(x, y, x + 30, y - 30, x + 70, y - 50, x + 50, y - 10);
    p5.quad(x, y, x - 30, y - 30, x - 70, y - 50, x - 50, y - 10);
}
