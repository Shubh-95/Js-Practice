//"use strict"; // treat all js code as new version

// alert(3 + 3)   // will give error as we are using nodejs not browser

// different ways to declare a data type

let name = "Shubham"
var age = 21
const gender = "Male"
salary = 100000    // this type of declaration is not valid in new version of javascript (if we use "use strict it will give an error")

// Prefer to not use var because of issue in block scope and functional scope


// Different types of datatypes

// number => 2^53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => means value is still not assigned to a declared variable.
// symbol => used for uniqueness


// object

console.log(typeof null)  // Output : object
console.log(typeof undefined)  // Output : undefined