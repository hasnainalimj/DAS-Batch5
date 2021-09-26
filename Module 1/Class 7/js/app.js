//Chapter # 18

var sayHello = "Hello";

// for(condition/iteration) {
// statement
// }

//1st: from where to start
//2nd: when to stop //condition
//3rd: iteration / increment

// debugger
// for(var i=0; i<10; i++) {
//     console.log(sayHello + i)
// }

// var tableNum = +prompt("Enter table to print!");
// var lengthOfTable = +prompt("Enter table length!");

// for (var i = 1; i <= lengthOfTable; i++) {
//   console.log(tableNum + " X " + i + " = " + tableNum * i);
// document.writeln(tableNum + " X " + i + " = " + tableNum * i + "<br>")
// }

var cities = [
  "Karachi",
  "Lahore",
  "Sukkur",
  "Hyderabad",
  "Multan",
  "Islamabad",
  "Karachi",
];

// console.log(cities[0])
// console.log(cities[1])
// console.log(cities[2])
// console.log(cities[3])

// console.log(cities.length)

// for (var i = 0; i < cities.length; i++) {
//     console.log(cities[i])
// }

var text = "Pakistan Zindabad";
// console.log(text[9])

// for (var i = 0; i < text.length; i++) {
//     console.log(text[i])
// }

//Chapter # 19

// var myCity = prompt("Enter your city name should be like i.e: Karachi");

// for(var i=0; i<cities.length; i++) {
//     if(myCity == cities[i]) {
//         console.log('your city name is matched')
//     } else {
//         console.log('not found')
//     }
// }

// for (var i = 0; i < cities.length; i++) {
//   if (myCity == cities[i]) {
//     console.log("your city name is matched");
//     break;
//   } else {
//     console.log("not found");
//   }
// }

// var found = false; //Concept of flagging
// for (var i = 0; i < cities.length; i++) {
//   if (myCity == cities[i]) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   console.log("your city name is matched");
// } else {
//   console.log("not found");
// }

// Chapter # 20

var firstNames = ["Michael", "David", "Jordan", "Smith"];
var lastNames = ["Jackson", "Steve", "Roger", "Mizz"];

//Michael Jackson
//Michael Steve

for (var i = 0; i < firstNames.length; i++) {
  for (var j = 0; j < lastNames.length; j++) {
    console.log(firstNames[i] + " " + lastNames[j]);
  }
}
