// Decorator Function
function logger(target: any, key: string, descriptor: any) {
    const original = descriptor.value;
    descriptor.value = function (...args ) {
// Call the original method
        const result = original.apply(this, args);
// Log the call, and the result
        console.log(`${key} with args ${JSON.stringify(args)} returned
${JSON.stringify(result)}`);
// Return the result
        return result;
    }
    return descriptor;
}

function log(target: any) {
    const original = target;
// Wrap the constructor with a logging constructor
    const constr: any = (...args :any[]) => {
        console.log(`Creating new ${original.name}`);
        const c: any = () => {
            return original.apply(null, args);
        }
        c.prototype = original.prototype;
        return new c();
    }
    constr.prototype = original.prototype;
    return constr;
}


@log
class Calculator {
    square(n: number) {
        return n * n;
    }
}

const calculator = new Calculator();
// square with args [2] returned 4
calculator.square(2);
// square with args [3] returned 9
calculator.square(3);