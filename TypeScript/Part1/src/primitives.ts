let isPresent: boolean = true;
let magic: string = "done";

let hello: string = "";
let notDefined: undefined;
console.log(notDefined)

let array: number[] = [];
array.push(1)
array.push(3)
console.log(array)

let set: Set<number> = new Set<number>([1, 2, 3, 3, 4, 4, 4, 4])
console.log(set)

let myTuple: [string, number, boolean];
myTuple = ["Hello", 10, true];
console.log(myTuple)

let center = {
    x: 0,
    y: 0
};

class Point {
    constructor(public x: number, public y: number) {
    }
}

let pt = new Point(1, 2);
console.log(pt.y, "y: " + pt.y)


console.log(adding(9,1))


function adding(x: number, y: number): number {
    return x + y;
}