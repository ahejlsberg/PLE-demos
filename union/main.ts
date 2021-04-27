
//#region overloads vs. union types

// function setSize(value: string): void;
// function setSize(value: number): void;

function setSize(value: any) {
    if (typeof value === "string") {
        // ...
    }
    else if (typeof value === "number") {
        // ...
    }
    else {
        throw new Error("Invalid argument");
    }
}

setSize("min");
setSize(42);
setSize(true);

//#endregion

//#region Literal types

type Direction = "up" | "down" | "left" | "right";

function move(direction: Direction, distance: number) {
    // ...
}

move("up", 10);
move("left", 20);
move("back", 5);

//#endregion

//#region --strictNullChecks

function error(message?: string | undefined) {
    if (message !== undefined) {
        message.length;
    }
}

//#endregion

//#region Control flow analysis

function countLines(text?: string[]): number {
    let count: number;
    for (const line of text) {
        if (line.length !== 0) {
            count = count + 1;
        }
    }
    return count;
}

let a = countLines(["one", "two", "", "three"]);
let b = countLines(["hello", null, "world"]);
let c = countLines();

//#endregion

//#region JS operator semantics and narrowing

function test(s: string | string[] | null | undefined) {
    if (s) {
        s;
    }
    else {
        s;
    }

    if (typeof s === "object") {
        s;
    }
    else {
        s;
    }

    if (s == undefined) {
        s;
    }
    else {
        s;
    }

    if (typeof s === "undefined") {
        s;
    }
    else {
        s;
    }
}

//#endregion

//#region Discriminated union types

type Shape =
    | { kind: "square", size: number }
    | { kind: "rectangle", width: number, height: number }
    | { kind: "circle", radius: number };

function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * s.radius * s.radius;
    }
}

//#endregion

//#region Intersection types

type StrFunc = (x: string) => string;
type DirFunc = (x: Direction) => Direction;
type NumFunc = (x: number) => number;

declare let f: StrFunc | DirFunc;  // (x: string & Direction) => string | Direction

let x = f("up");

type T0 = string | Direction;
type T1 = string & Direction;

type T2 = string | number;
type T3 = string & number;

//#endregion
