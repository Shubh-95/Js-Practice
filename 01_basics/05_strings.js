const name = "Shubham"
const repoCount = 50

//console.log("hello my name is " + name + "and my repo count is " + repoCount)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // -> we use this method because it is very useful as it also allows to perform methods on the variables. It is also the latest convention to use.


const gameName = new String("eliteShubh") // it is stored as a key value pair and has multiple methods(operations) on strings.

// String {'eliteShubh'}
// 0: "e"
// 1: "l"
// 2: "i"
// 3: "t"
// 4: "e"
// 5: "S"
// 6: "h"
// 7: "u"
// 8: "b"
// 9: "h"
// length: 10

// console.log(gameName)
// console.log(gameName[0])

// *******methods of the string*******

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('e'))

const newString = gameName.substring(0,5);
console.log(newString)

const newSlice = gameName.slice(0,5);
console.log(newSlice)

const url = "https://Shubham.com/shubham%20kumar"
console.log(url.replace("%20", "-"))

console.log(url.includes("Shubham"))

const stringMystr = "Shubham is my name"
console.log(stringMystr.split(" "))