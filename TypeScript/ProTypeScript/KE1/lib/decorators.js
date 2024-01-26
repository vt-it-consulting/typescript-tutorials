var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator Function
function logger(target, key, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        // Call the original method
        const result = original.apply(this, args);
        // Log the call, and the result
        console.log(`${key} with args ${JSON.stringify(args)} returned
${JSON.stringify(result)}`);
        // Return the result
        return result;
    };
    return descriptor;
}
function log(target) {
    const original = target;
    // Wrap the constructor with a logging constructor
    const constr = (...args) => {
        console.log(`Creating new ${original.name}`);
        const c = () => {
            return original.apply(null, args);
        };
        c.prototype = original.prototype;
        return new c();
    };
    constr.prototype = original.prototype;
    return constr;
}
let Calculator = class Calculator {
    square(n) {
        return n * n;
    }
};
Calculator = __decorate([
    log
], Calculator);
const calculator = new Calculator();
// square with args [2] returned 4
calculator.square(2);
// square with args [3] returned 9
calculator.square(3);
