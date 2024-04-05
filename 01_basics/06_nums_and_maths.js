const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

console.log(balance.toString())
// console.log(balance.toString().length)

// console.log(balance.toFixed(2))  //--> Gives the value to a fixed point notation (returns a string)

const otherNumber = 11123.8966

// console.log(otherNumber.toPrecision(4)) //-->Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits

const hundreds = 100000000
// console.log(hundreds.toLocaleString()); // --> add commas based on US standard
// console.log(hundreds.toLocaleString('en-IN')); // --> add commas based on Indian standard



// ******************* MATHS **********************

// console.log(Math)
// console.log(Math.abs(-2))
// console.log(Math.round(4.6))
// console.log(Math.ceil(2.4))
// console.log(Math.floor(8.9))
// console.log(Math.min(1,2,3,4))
// console.log(Math.max(1,2,3,5))

console.log(Math.random());
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
