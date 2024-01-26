"use strict";
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
let cat = new Animal('Cat');
cat.move(10);
//cat.name = 'Dog';
class Bird extends Animal {
    id = 0;
    fly(distanceInMeters) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}
