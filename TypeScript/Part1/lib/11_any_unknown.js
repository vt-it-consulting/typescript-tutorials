"use strict";
function log(value) {
    if (typeof (value) == 'number') {
        console.log(value.toFixed(2));
    }
    else {
        console.log(value);
    }
}
log(123.456);
log('Hello world');
function load() {
    return 1;
}
let helloa = load();
const trimmerd = helloa?.trim();
if (typeof helloa === 'string') {
    const trimmed = helloa.trim();
}
