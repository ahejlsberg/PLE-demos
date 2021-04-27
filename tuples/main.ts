
//#region Tuples and parameters

type Tuple = [string, number?, ...boolean[]];

const t1: Tuple = ['abc'];
const t2: Tuple = ['abc', 42];
const t3: Tuple = ['abc', 42, true, false, false];

function foo(...args: Tuple) {}

foo('abc', 42, true, false);
foo(...t1);
foo(...t2);
foo(...t3);

//#endregion

//#region Variadic functions

declare function f0(): string;
declare function f1(a: string): string;
declare function f2(a: string, b: number): string;
declare function f3(a: string, b: number, c: boolean): string;

function call(fn: (...args: any[]) => any, ...args: any[]) {
    return fn(...args);
}

let x = call(f0);

//#endregion

//#region Variadic tuple elements

type Foo<T extends unknown[]> = [string, ...T, number];

type T1 = Foo<[boolean]>;  // [string, boolean, number]
type T2 = Foo<[number, number]>;  // [string, number, number, number]
type T3 = Foo<[]>;  // [string, number]

//#endregion

//#region Inferring to a composite tuple type

function bind<T extends unknown[], U extends unknown[], R>(f: (...args: [...T, ...U]) => R, ...a: T) {
    return (...b: U) => f(...a, ...b);
}

const fn1 = (a: number, b: string, c: boolean, d: string[]) => 0;

const c0 = bind(fn1);
const c1 = bind(fn1, 1);
const c2 = bind(fn1, 1, 'abc');
const c3 = bind(fn1, 1, 'abc', true);
const c4 = bind(fn1, 1, 'abc', true, ['x', 'y']);

//#endregion
