// --strictFunctionTypes

interface Pet { p: string }
interface Dog extends Pet { d: string }
interface Cat extends Pet { c: string }

interface Stack<T> {
    push(value: T): void;
    pop(): T;
    forEach(action: (value: T) => void): void;
}

declare let pets: Stack<Pet>;
declare let dogs: Stack<Dog>;
declare let cats: Stack<Cat>;

pets = dogs;  // Ok?
dogs = pets;  // Error
dogs = cats;  // Error

pets.push({} as Cat);  // Hmm?
