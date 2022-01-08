//Topic # 1

// console.log(localStorage)

localStorage.setItem("number", 123);
localStorage.setItem("string", "abc");
localStorage.setItem("boolean", true);
localStorage.setItem("object", JSON.stringify({ name: "Ali" }));
localStorage.setItem("array", JSON.stringify(["Jan", "Feb"]));

var number = Number(localStorage.getItem("number"));
// console.log("🚀 ~ file: app.js ~ line 12 ~ number", number)
var string = localStorage.getItem("string");
// console.log("🚀 ~ file: app.js ~ line 14 ~ string", string)
var boolean = localStorage.getItem("boolean");
// console.log("🚀 ~ file: app.js ~ line 16 ~ boolean", boolean)
var object = JSON.parse(localStorage.getItem("object"));
// console.log("🚀 ~ file: app.js ~ line 19 ~ object", object)
var array = JSON.parse(localStorage.getItem("array"));
// console.log("🚀 ~ file: app.js ~ line 20 ~ array", array)

//Clear your storage
// localStorage.clear()

//Topic # 2

// setTimeout(function() {
//     console.log('Executed')
// }, 5000)

// setInterval(function() {
//     console.log('Running')
// }, 1000)

//How to stop interval
// var timer = setInterval(function() {
//     console.log('Running')
// }, 1000)

// function stop() {
//     clearInterval(timer)
// }

//Topic # 3

//1) var
//2) let
//3) const

let name = "Hasnain Ali";
// console.log("🚀 ~ file: app.js ~ line 50 ~ name", name)

// let name = 'Abc' //This is will throw an error

name = "Faizan";
// console.log("🚀 ~ file: app.js ~ line 56 ~ name", name)

function check() {
  let name = "Sami";
  console.log("🚀 ~ file: app.js ~ line 57 ~ check ~ name", name);
}

// check()

const age = 15;
// console.log("🚀 ~ file: app.js ~ line 66 ~ age", age)

// const age = 23 //This is will throw an error
// age = 24 //This is will throw an error

//Topic # 4
var arr = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "A"];

// for(var i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

var value = arr.map(function (value, index) {
  return value;
  //   console.log("🚀 ~ file: app.js ~ line 79 ~ index", index)
  //   console.log("🚀 ~ file: app.js ~ line 79 ~ arr.map ~ value", value);
});
// console.log("🚀 ~ file: app.js ~ line 85 ~ value ~ value", value)
//Map always return a new array/value

// arr.map(function() {
//     console.log('run')
// })

//Topic # 5
// let result = arr.map(function(val) {
//     return val === "A"
// })

// let result = arr.filter(function(val) {
//     return val === "A"
// })
// console.log("🚀 ~ file: app.js ~ line 94 ~ result ~ result", result)

const users = [
  {
    name: "hasnain",
    isOnline: false,
  },
  {
    name: "faizan",
    isOnline: true,
  },
  {
    name: "sami",
    isOnline: true,
  },
];

let onlineUsers = users.filter(function (val) {
  return val.isOnline;
});
// console.log("🚀 ~ file: app.js ~ line 118 ~ onlineUsers ~ onlineUsers", onlineUsers)

let checking = users.filter(function (val, ind) {
  return ind == 1;
});
// console.log("🚀 ~ file: app.js ~ line 123 ~ checking ~ checking", checking)

//Topic # 6
const body = document.getElementById("body");
let heading = "Learning Ecma Script";
const html = `<h1>${heading}</h1>`;
body.innerHTML += html;
body.innerHTML += `<div> <p>${heading}</p></div>`;

//Topic # 7
// arr.forEach(function (value, index) {
//     console.log("🚀 ~ file: app.js ~ line 135 ~ value ~ value", value)
//   });

//Topic # 8
const wrapper = document.querySelector("#body");
// console.log("🚀 ~ file: app.js ~ line 139 ~ wrapper", wrapper);
const paras = document.querySelectorAll(".name")
// console.log("🚀 ~ file: app.js ~ line 141 ~ paras", paras)

//Topic # 9
var data = [1,2,3,4]
var anotherData = [5,6,7,8]

var res1 = [...data, ...anotherData, ...[11,9,15]]
// console.log("🚀 ~ file: app.js ~ line 148 ~ res1", res1)

var userData = {
    name: 'Hasnain Ali',
    age: 25,
}

var userNewData = {
    email: 'mjhasnain15@gmail.com',
    phone: '0310-2932665'
}

var userFinalData = {
    ...userData,
    ...userNewData,
    isActive : true
}

// console.log("🚀 ~ file: app.js ~ line 161 ~ userFinalData", userFinalData)

//Topic # 10
var rev = data.reverse()
// console.log("🚀 ~ file: app.js ~ line 170 ~ rev", rev)

//Topic # 11
var response = data.includes(1)
var response = data.includes(5)
// console.log("🚀 ~ file: app.js ~ line 174 ~ response", response)

//Topic # 12

var myArr = new Set([1,2,3,4, {} , true, 'Abc'])
// console.log("🚀 ~ file: app.js ~ line 180 ~ myArr", myArr.size)
myArr.add('xyz')
// myArr.clear()
// console.log("🚀 ~ file: app.js ~ line 180 ~ myArr", myArr.entries())
// console.log("🚀 ~ file: app.js ~ line 180 ~ myArr", myArr)

// myArr.forEach(function(val){
// console.log("🚀 ~ file: app.js ~ line 187 ~ myArr.forEach ~ val", val)
// })

var having = myArr.has('xyz')
// console.log("🚀 ~ file: app.js ~ line 191 ~ having", having)

myArr.delete('xyz')
// console.log("🚀 ~ file: app.js ~ line 194 ~ myArr", myArr)