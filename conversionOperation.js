// "33" = 33
// "33abc" = NaN
// null = 0
// undefined = NaN
// true = 1; false = 0;

let score = 33

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN = not a number

// 1 = true; 0 = false;
// "" = false
//"Piya" = true


let isLoggedIn = "Priyanka"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);


// ************************ Operations ******************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)
console.log(2%2)

let str1 = "hello"
let str2 = "world"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log("1" + 2 + "2")

console.log(+true);
console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)
