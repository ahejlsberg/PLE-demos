
//#region Conditional logic

type NameLabel = { name: string };
type IdLabel = { id: number };

function createLabel(nameOrId: string | number): NameLabel | IdLabel {
    throw "Not implemented";
}

let label1 = createLabel("Elmer");
let label2 = createLabel(42);

//#endregion

//#region Conditional types

type Label<T extends string | number> = T extends string ? NameLabel : IdLabel;

function createLabel2<T extends string | number>(nameOrId: T): Label<T> {
    throw "Not implemented";
}

let label3 = createLabel2("Elmer");
let label4 = createLabel2(42);
let label5 = createLabel(Math.random() > 0.5 ? "Elmer" : 42);

//#endregion

//#region Inference in conditional types

type Awaited<T> = T extends Promise<infer U> ? U : T;

type P0 = Awaited<string>;
type P1 = Awaited<Promise<string>>;
type P2 = Awaited<Promise<Promise<string>>>;
type P3 = Awaited<Promise<string | Promise<Promise<number> | undefined>>>;

//#endregion

//#region Flattening arrays

type ElementType<T> = T extends (infer U)[] ? ElementType<U> : T;

type Flatten<T extends unknown[]> = ElementType<T>[];

type A1 = Flatten<string[][][]>;  // string[]
type A2 = Flatten<string[][] | (number[] | boolean[][])[]>;  // (string | number | boolean)[]

type InfiniteArray<T> = InfiniteArray<T>[];

type E1 = ElementType<InfiniteArray<string>>;  // Infinite depth error

//#endregion

//#region Reversing tuples

type Reverse<T> =
    T extends [] ? T :
    T extends [infer Head, ...infer Tail] ? [...Reverse<Tail>, Head] :
    T;

type T10 = Reverse<[string, number, boolean]>;

//#endregion
