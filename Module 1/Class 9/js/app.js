//Chapter # 26

var num1 = 12.2;
var num2 = 25.6;
var num3 = -8.6;
var num4 = -3.4;

// console.log(Math.round(num1))
// console.log(Math.round(num2))
// console.log(Math.round(num3))
// console.log(Math.round(num4))

// console.log(Math.floor(num1))
// console.log(Math.floor(num2))
// console.log(Math.floor(num3))
// console.log(Math.floor(num4))

// console.log(Math.ceil(num1))
// console.log(Math.ceil(num2))
// console.log(Math.ceil(num3))
// console.log(Math.ceil(num4))

//Chapter # 27

var randomNumbers = Math.random(); //Range 0 to 1
// console.log(randomNumbers)

var myNum = Math.random() * 6;
// console.log("🚀 ~ file: app.js ~ line 30 ~ myNum", Math.round(myNum))

//Chapter # 28

// var digit = prompt("Enter any digit you want! i.e : 2");
// console.log("🚀 ~ file: app.js ~ line 34 ~ digit", digit)

// var parseInInteger = parseInt(digit);
// console.log("🚀 ~ file: app.js ~ line 35 ~ parseInInteger", parseInInteger);

var n = 123;
var parseInFloat = parseFloat(n);
// console.log("🚀 ~ file: app.js ~ line 40 ~ parseInFloat", parseInFloat)

var parseInInteger = parseInt(n);
// console.log("🚀 ~ file: app.js ~ line 44 ~ parseInInteger", parseInInteger)

//Chapter # 29

var manageType = Number(n);
// console.log("🚀 ~ file: app.js ~ line 47 ~ manageType", manageType)

var str = 123;
// console.log(str.toString());

//Chapter # 30

var decimals = 123.3223213213213223213;
// console.log(Number(decimals.toFixed(2)))

//Chapter # 31

var date = new Date();

// console.log(date)

// console.log(typeof date) //Object

// console.log(date.toString().slice(0,15))

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var day = date.getDay() + 1;
// console.log("🚀 ~ file: app.js ~ line 70 ~ day", dayNames[day])

//Chapter # 32

// console.log(date.getMonth()+1)
// console.log(date.getDate())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getTime())

//Chapter # 33

var msDiff = new Date("August 12, 2022").getTime() - new Date().getTime();
var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
// console.log("🚀 ~ file: app.js ~ line 88 ~ daysTillDoom", daysTillDoom)

//Chapter # 34

var setDate = new Date();
console.log("Old Date =>", setDate);

setDate.setFullYear(2023, 4, 17);
setDate.setMonth(4);
setDate.setDate(4);
setDate.setHours(1);
setDate.setMinutes(2);
setDate.setSeconds(3);
setDate.setMilliseconds(500);

console.log("Old Date =>", setDate);
