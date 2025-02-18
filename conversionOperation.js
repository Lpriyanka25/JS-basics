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
