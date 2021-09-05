//External Scripting

// JS is an interpreter language which executes your code line-by-line

//Chapter # 1

// alert(123);
// alert("Javascript");

// window.alert("Testing"); //Old School Approach

// console.log(window)

// console.log(window)
// console.log('working on js')

// Chapter # 2

//Hoisting

var name; //Declaration of a variable
name = "Ali"; //Assigning the value in a declared variable

// console.log(name)
// alert(name)

name = "Ahmed"; //Reassigning the value or replace the value of a variable

// console.log(name)
// alert(name)

var name = "Abc"; //Declaration + Assigning

// '' "" // String

// var nation = "Paksitan"

var _pi = "3.142"; //Tells the developer to not change the value of those variables which starts form _ (means these values are constant)

var multiple = "Apple's";

//Naming convention for variables
// _name //constant
// $name
// name

// 1name //Wrong
// @name //Wrong

//Camel Case
var myEmail = "abc@gmail.com";
var yourAge = 12;

//Snake Case
// var Myemail = ''

//Chapter # 3

var num = 10;
// console.log("🚀 ~ file: app.js ~ line 61 ~ num", num)
// console.log(num + 5)
// console.log(num)

// num += 100 //Adding + assigning
// num = 100
// console.log(num)

//Chapter # 5

var result = num + 20; //Saving old value
// console.log("🚀 ~ file: app.js ~ line 68 ~ result", result)

var plus = "2" + 2; //Concatenation
// console.log("🚀 ~ file: app.js ~ line 72 ~ plus", plus)

// var minus = '2' - 2 * /
// console.log("🚀 ~ file: app.js ~ line 75 ~ minus", minus)

//  var num = 10;
//  var popularNumber = num + 200;

var whatsLeftOver = 10 % 3;
// console.log("🚀 ~ file: app.js ~ line 85 ~ whatsLeftOver", whatsLeftOver)

// Chapter # 6

var digit = 1;

// 1 ++ Pre Increment
// 2  -- Pre Decrement
// 3 Post Increment ++
// 4 Post Decrement --

// console.log("🚀 ~ file: app.js ~ line 91 ~ digit", ++digit)
// console.log("🚀 ~ file: app.js ~ line 91 ~ digit", ++digit)
// console.log("🚀 ~ file: app.js ~ line 91 ~ digit", ++digit)
// console.log("🚀 ~ file: app.js ~ line 91 ~ digit", digit++)
// console.log("🚀 ~ file: app.js ~ line 91 ~ digit", digit)

// console.log("🚀 ~ file: app.js ~ line 91 ~ digit", --digit) //0, 0, 0
// console.log("🚀 ~ file: app.js ~ line 91 ~ digit", --digit) //-1, -1, -1
// console.log("🚀 ~ file: app.js ~ line 91 ~ digit", digit--) //-1, -1, -1
// console.log("🚀 ~ file: app.js ~ line 91 ~ digit", digit--) //-2, -1, -2
// console.log("🚀 ~ file: app.js ~ line 91 ~ digit", digit) //-3, -2, -3

var num1 = 10;
var num2 = 15;

// var result = ++num1 + num2-- //23, 26, 27
// var result = --num1 + num2++ - num1 //16, 15, 14

var result = num2 - ++num2 + --num1 + num1++;

console.log("🚀 ~ file: app.js ~ line 113 ~ result", result);
