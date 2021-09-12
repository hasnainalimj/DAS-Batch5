//Chapter # 7

var result = (1 + 2) * 3;
// console.log("🚀 ~ file: app.js ~ line 3 ~ result", result);

//Chapter # 8

var text1 = "Hello";
var space = " ";
var text2 = "World";

var subText = text1 + space + text2;
// console.log("🚀 ~ file: app.js ~ line 13 ~ subText", subText)

var digit = 10;

var res = text1 + space + digit;
// console.log("🚀 ~ file: app.js ~ line 18 ~ res", res)

//Chapter # 9

// var username = prompt('enter your name')
// console.log("🚀 ~ file: app.js ~ line 24 ~ username", username)

// var age = +prompt('enter your age')
// console.log("🚀 ~ file: app.js ~ line 27 ~ age", age)

//Prompt always returns values in type of string
//If you want to change the type of prompt you can use type casting or + operator before prompt
//NaN = Not a number

// var quiz = prompt('capital of pakistan?','Answer') //Pre-defined values
// console.log("🚀 ~ file: app.js ~ line 34 ~ quiz", quiz)

//Chapter # 10 , 11

// var age = +prompt("Enter your age...");

// if(condition) {
//statement
// }

//Comparision Operators (< , > , ==, ===, <= , >=, !==)

// if(age < 20) {
//     console.log('You are not allowed')
// }

// if(age > 20) {
//     console.log('You are allowed')
// }

// if(age <= 10) {
//     console.log('You are not allowed')
// }

// if(age >= 18) {
//     console.log('You  not allowed')
// }

// if(age == 5) {
//     console.log('You are allowed')
// }

// if (age !== 6) {
//   console.log("Value is not a 6");
// }

var dig1 = 5;
var dig2 = "5";

// if(dig1 === dig2) {
//     console.log('matched')
// }

//Chapter # 12

// var cnic = prompt('enter your cnic')
// console.log("🚀 ~ file: app.js ~ line 79 ~ cnic", cnic.length) //return the length of your string in number

// if(cnic.length === 14) {
//     console.log('CNIC is valid')
// } else {
//     console.log('invalid format')
// }

// var n1 = +prompt("enter value 1"); //10 number
// var n2 = +prompt("enter value 2"); //20 number
// var op = prompt("enter airthmetical operator"); //+ string

// var result = n1 + op + n2;
//   10 + '+' + 20 = '10+20'
// console.log("🚀 ~ file: app.js ~ line 92 ~ result", result); //30, 30, 30

// if (op == "+") {
//   console.log(n1 + n2);
// } else if (op == "-") {
//   console.log(n1 - n2);
// } else if (op == "*") {
//   console.log(n1 * n2);
// } else if (op == "/") {
//   console.log(n1 / n2);
// } else if (op == "%") {
//   console.log(n1 % n2);
// } else {
//   console.log("invalid operator");
// }

//Chapter # 14

// var city = prompt("Enter your city!");

// if (city == "Karachi") {
//   //1
//   var unit = prompt("enter mqm unit office");
//   if (unit == 90) {
//     console.log("dastageer");
//   } else if (unit == 97) {
//     var area = prompt("enter your area");
//     if (area == "fsouth") {
//       console.log("apna ghr hy yaha");
//     } else {
//       console.log("kisi or ka pta nh....");
//     }
//   } else {
//     console.log("nh pta kaha hy karachi ka ye wala unit office :)");
//   }
// } else {
//   //1
//   var tourPoint = prompt("enter tour location");

//   if (tourPoint == "sawat") {
//     console.log("maza ajaye ga");
//   } else if (tourPoint == "gilgit") {
//     console.log("wah kiya jaga hy");
//   } else {
//     console.log("plan cancelled");
//   }
// }

//Chapter # 13

// *) Conditional Operators
// 1) AND OPERATOR (&&)
// 2) OR OPERATOR (||)

var n1 = 5;
var n2 = 6;

// if (n1 == 5 && n2 == 7) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if (n1 == 5 || n2 == 7) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }

// true  &&  true || true
// var output = 10 === 10 && 1 < 5 || 2 * 2 == 4 //true, true, true

var output = 10 !== 11 && 2 + 1 == 3 && 1 - 1 == 0 && 5;
// console.log("🚀 ~ file: app.js ~ line 163 ~ output", output);
