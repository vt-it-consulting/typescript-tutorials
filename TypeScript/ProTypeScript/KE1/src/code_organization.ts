import Example = First.Example;
import Ferry = Shipping.Ferry;
import Yacht, {Person} from "./Yatch";


var example: First.Example = new Example();
console.log(example);


var secondExample: Second.Example = new Example();
console.log(secondExample)


var ship = new Ferry("Road", "", 1);
ship.displacement= 1;


let yatch = new Yacht("","",1);
var person = new Person("");

