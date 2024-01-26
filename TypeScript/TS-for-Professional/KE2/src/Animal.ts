class Animal {
    //public readonly name: string;

    constructor( public  readonly name: string) {
        //this.name = name;
    }
}

const sheep = new Animal('sheep');
console.log(sheep.name); // Allow
//sheep.name = 'wolf'; // Disallow


