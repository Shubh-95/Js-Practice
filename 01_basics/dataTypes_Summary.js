//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);


// ******************************** //

// Memory type :- Stack(Primitive) & Heap(Non-Premitive)

let myName = "Shubham"
let anotherName = myName

anotherName = "Shubh"

console.log(anotherName)
console.log(myName)


let userOne = {
    email: "user@gamil.com",
    upiId : "myUpi@ybl"
}

let userTwo = userOne
userTwo.email = "myEmail@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)


