//Chapter # 15

var user = "Hasnain Ali";
var user2 = "Mustafa";
var user3 = "Kaleem";
var user4 = "Sami";

// typeof() check the type of your value and always return in string

var users = ["hasnain ali", "mustafa", "kaleem", "sami"]; //0
// console.log(users)

// var index = +prompt("enter user index");
// console.log("🚀 ~ file: app.js ~ line 12 ~ index", index);

// if (isNaN(index)) {
//   alert("Invalid Type");
// } else {
//   alert(users[index]);
// }

// users[2] //directly hit the second index of an array

var mixedArray = [1, "Bob", "Now is", true];

//Chapter # 16

var todo = []

todo[0] = 'Breakfast'
todo[100] = 'Died'
todo[20] = 'Pakistan Tour'


todo[100] = 'Shadi'
// console.log("🚀 ~ file: app.js ~ line 25 ~ todo", todo)

//Methods of an array
//1) Pop // remove data from array (end)
//2) Push //to add data in array (end)

todo.push('Exercise')

todo.push('Rest','Shopping') //always returns the new length of an array

// todo.pop() //always returns the deleted value
// todo.pop()

// console.log("🚀 ~ file: app.js ~ line 25 ~ todo", todo)

//Chapter # 17
// 1) Shift() remove data from array (start)
// 2) Unshit() //to add data in array (start)
// 3) Splice() //to add & remove items from an array as per your choices/indexes

// todo.shift() //always returns the deleted value
// todo.shift() 

todo.unshift('Alarm')
todo.unshift('Namaz-e-Fajr','Sleeping') //always returns the new length of an array

// console.log("🚀 ~ file: app.js ~ line 25 ~ todo", todo)

var cities = ['Karachi','Lahore','Sukkur','Islamabad']

cities.splice(1,0,'Hyderabad','Larkana') //return an empty array

// 1) first argument is the index of the new values starts from
// 2) deleted items count (optional)
// 3) items

cities.splice(4,1) //delete the value from the 4th index to the number of deleted count
cities.splice(3,3) //also returns the deleted values in array
cities.splice(2,1,'Hala','Mirpur') //adding & removing 

// console.log("🚀 ~ file: app.js ~ line 64 ~ cities", cities)
