{
    // The array is typed using the Monument interface
    const monuments = [];
    monuments.push({ name: "tene", heightInMeters: 1 });
}
{
    let poem;
    // OK
    poem = [1, true, 'love'];
    console.log(poem);
}
function typeGuardExample(stringNumber) {
    // Type guard
    if (typeof stringNumber === 'string') {
        // OK
        return stringNumber.length;
    }
    else {
        // OK
        return stringNumber.toFixed();
    }
}
const shortAddNumbers = (a, b) => a + b;
const mediumAddNumbers = (a, b) => {
    return a + b;
};
const longAddNumbers = function (a, b) {
    return a + b;
};
class DomainId {
    constructor(id) {
        this.id = id;
    }
    get value() {
        return this.id;
    }
}
var domain = new DomainId(2);
console.log(domain.value);
