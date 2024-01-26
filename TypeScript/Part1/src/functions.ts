

type Add = (a: number, b: number) => number;

let add: Add;

add = function (a: number, b: number): number {
    return a + b;
};

add = (a, b) => a + b;


add(1,1)