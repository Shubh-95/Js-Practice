let score = "33"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "Shubh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true,     0 => false,        any other number except 0 => true
// "" => false,    "Shubh" => true,      any other string except empty => true

let num1 = 95
let stringNum1 = String(num1)
console.log(stringNum1)
console.log(typeof stringNum1)



// ******************** Operations ***********************

// console.log(2+2)  // Addition
// console.log(2-2)  // Subtraction
// console.log(2*2)  // Multiplication
// console.log(2/2)  // Division
// console.log(2**2) // Power
// console.log(2%3)  // Remainder

let str1 = "Shubham"
let str2 = " Kumar"
let str3 = str1 + str2
console.log(str3);

let gameCounter = 100
++gameCounter
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);