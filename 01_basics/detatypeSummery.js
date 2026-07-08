// Primitive

// 7 types :string, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);

const bigInt=1243233341232234424234n
// console.log(typeof bigInt);


// Reference (Non primitive)

// Array, Objects, Functions

const heros =["tony stark", "piter parker", "shaktiman"]

let myObj  = {
    name: "Prabhat",
    age: 22
}

const myFunction = function(){
    console.log("Hello world");
    
}
myFunction()
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof myObj);
