
function setSize(value) {
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
setSize(true);  // Error
