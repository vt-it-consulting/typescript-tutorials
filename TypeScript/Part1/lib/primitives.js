"use strict";
let isPresent = true;
let magic = "done";
let hello = "";
let notDefined;
console.log(notDefined);
let array = [];
array.push(1);
array.push(3);
console.log(array);
let set = new Set([1, 2, 3, 3, 4, 4, 4, 4]);
console.log(set);
let myTuple;
myTuple = ["Hello", 10, true];
console.log(myTuple);
let center = {
    x: 0,
    y: 0
};
class Point {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let pt = new Point(1, 2);
console.log(pt.y, "y: " + pt.y);
console.log(adding(9, 1));
function adding(x, y) {
    return x + y;
}
