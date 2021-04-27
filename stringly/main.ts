
//#region Index and Lookup types

type Item = {
    name: string;
    price: number;
    inStock: boolean;
}

function getProp(obj: any, key: string) {
    return obj[key];
}

function f1(item: Item) {
    const name = getProp(item, 'name');
    const price = getProp(item, 'price');
}

//#endregion

//#region A real world example

function pluck<T, K extends keyof T>(array: T[], key: K) {
    return array.map(x => x[key]);
}

function f2(items: Item[]) {
    let names = pluck(items, "name");  // string[]
    let widths = pluck(items, "price");  // number[]
}

//#endregion

//#region Mapped types

type T0 = Partial<Item>;
type T1 = Pick<Item, 'name' | 'price'>;

declare function assign<T>(obj: T, props: Partial<T>): void;
declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;

function f3(item: Item) {
    assign(item, { inStock: false });
    let x = pick(item, 'name', 'inStock');
}

//#endregion
