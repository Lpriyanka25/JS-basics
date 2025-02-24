// Primitive
// 7 types : String , Number, Boolean, Null, Undefined,
//  Symbol, BigInt

//JS dyamically typed, the type of a variable is checked during runtime
const score = 100;
const scoreValue = 100.65

const isLogged = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 9699060601n


// Reference (Non Primitive) 
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Piya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world")
}
