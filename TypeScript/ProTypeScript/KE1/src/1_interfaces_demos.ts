{
    interface Monument {
        name: string;
        heightInMeters: number;
    }

// The array is typed using the Monument interface
    const monuments: Monument[] = [];

    monuments.push({name: "tene", heightInMeters: 1})

}

{
    let poem: [number, boolean, string];
// OK
    poem = [1, true, 'love'];

    console.log(poem)
}


function typeGuardExample(stringNumber: string | number) {

    // Type guard
    if (typeof stringNumber === 'string') {
        // OK
        return stringNumber.length;
    } else {
        // OK
        return stringNumber.toFixed();
    }
}

const shortAddNumbers = (a: number, b: number) => a + b;

const mediumAddNumbers = (a: number, b: number) => {
    return a + b;
}
const longAddNumbers = function (a: number, b: number) {
    return a + b;
}

class DomainId<T> {
    constructor(private id: T) {
    }
    get value(): T {
        return this.id;
    }
}

var domain = new DomainId(2);
console.log(domain.value)

