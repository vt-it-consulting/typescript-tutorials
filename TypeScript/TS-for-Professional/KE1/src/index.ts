let message: string = 'Hello world';
message += ' again';
message += ' again some more';
console.log(message);

 // boolean types
let isPresent: boolean = false
let magic: number = 66.5
let hello: string = "Hello world"

let symbol : symbol = Symbol("star")

let st: Set<number> = new Set([1,1,2,3,33,3,3,3,3])

console.log(st)
console.log(isPresent)
console.log()

// array
let array: number[] = [1,2,3,4,5]
array.push(1)
console.log(array)

// Tuple
let tuple: [number, number] = [1,2]
tuple = [2,3]
console.log(tuple)

let item: [number, string] = [45, "sdata"]
item = [1,"data"]
console.log(item)