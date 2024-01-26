function log(value: unknown) {
    if (typeof(value) == 'number') {
        console.log(value.toFixed(2));
    } else {
        console.log(value);
    }
}


log(123.456);
log('Hello world');

function load(): unknown {
    return 1;
}


let helloa = load();

const trimmerd = (helloa as string)?.trim();


if (typeof helloa === 'string') {
    const trimmed = helloa.trim();
}

