const accountId = 123;
let accountName = "abc";
var accountPassword = "123456";
accountCity = "Pune";
let accountState; // variable declared without any value gives undefined
// const value is declared once 

console.log(accountId);
/*
    prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountName, accountPassword, accountCity]);
