const digits = [1, 2, 3];
// Mutable - this changes the value of digits without using an assignment
digits.push(4, 5, 6);
console.log(digits);
const firstname = 'Steve';
console.log(firstname);
// function annotation with parameter type annotation and return type annotation
let sayHello;
// implementation of sayHello function
sayHello = function (name) {
    return 'Hello ' + name;
};
console.log(sayHello("My name is vincent Tene"));
// Type annotation for a union type
let union;
union = true;
union = "number";
console.log(union);
let poem;
poem = [1, true, 'love'];
console.log(poem);
const squares = [1, 4, 9, 16, 25];
const powers = [2, 4, 8, 16, 32];
// Array spreading
const squaresAndPowers = [...squares, ...powers];
// [1, 4, 9, 16, 25, 2, 4, 8, 16, 32]
console.log(squaresAndPowers);
function getAverage(a, b, c = 10) {
    const total = a + b + c;
    const average = total / 3;
    return 'The average is ' + average;
}
console.log(getAverage(1, 3));
function reverse(list) {
    const reversedList = [];
    for (let i = (list.length - 1); i >= 0; i--) {
        reversedList.push(list[i]);
    }
    return reversedList;
}
const letters = ['a', 'b', 'c', 'd'];
console.log(letters);
