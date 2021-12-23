//Chapter # 67,68,

var body = document.getElementById("parent");

// var div = document.createElement('div')
// div.setAttribute('class','box')
// body.appendChild(div)

var assignments = ["Assignment 1", "Assignment 2", "Assignment 3"];

for (var i = 0; i < assignments.length; i++) {
  //Wrapper
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "container");
  body.appendChild(wrapper);

  //Assignment Title
  var title = document.createElement("p");
  title.innerHTML = assignments[i];
  title.setAttribute("class", "title");
  wrapper.appendChild(title);

  //Assignment Due Date
  var date = document.createElement("p");
  date.innerHTML = "Due Dec 20";
  date.setAttribute("class", "date");
  wrapper.appendChild(date);
}

var heading = document.getElementById("heading");
var h1 = document.createElement("h1");
h1.innerHTML = "Hi....";
body.insertBefore(h1, heading);

// body.removeChild(heading)

//Chapter # 69,70

var p1Name = "Basic";
var p1Monthly = "100 GB";
var p1DskSpace = "100 Gb Etc";

// var p1Name = 'Basic'
// var p1Monthly = '100 GB'
// var p1DskSpace = 'Abc'

// var p1Name = 'Basic'
// var p1Monthly = '100 GB'
// var p1DskSpace = 'Abc'

// console.log(p1Name, p1Monthly, p1DskSpace)
// console.log(p1Name, p1Monthly, p1DskSpace)
// console.log(p1Name, p1Monthly, p1DskSpace)

var plan1 = {
  name: "Basic",
  price: 19,
  space: "100 GB",
};
// console.log("🚀 ~ file: app.js ~ line 57 ~ plan1", plan1);
// console.log(plan1.name);
// console.log(plan1.price);
// console.log(plan1.space);

var plan2 = {
  name: "Professional",
  price: "$30",
  space: "500 GB",
};
// console.log("🚀 ~ file: app.js ~ line 67 ~ plan2", plan2);
// console.log(plan2.name);
// console.log(plan2.price);
// console.log(plan2.space);

var plan3 = {
  name: "Ultimate",
  price: "$50",
  space: "1 TB",
};
// console.log("🚀 ~ file: app.js ~ line 74 ~ plan3", plan3)
// console.log(plan3.name);
// console.log(plan3.price);
// console.log(plan3.space);

plan1.name = "Starter";
plan1.discountedMonths = [5, 1, 8];
plan1.isAvailable = true;
// plan1.z = '23'
// plan1.a = '123'
// console.log(plan1.discountedMonths[1])

plan1.moreInfo = {
  date: new Date(),
};

// console.log("🚀 ~ file: app.js ~ line 57 ~ plan1", plan1.moreInfo.date);

delete plan1.isAvailable;
delete plan1.moreInfo;

var flag = "name" in plan1;
var flag = "names" in plan1;

// console.log("🚀 ~ file: app.js ~ line 103 ~ flag", flag)

//Chapter # 71

plan1.calculateSum = function () {
  return 2 + 2;
};

var result = plan1.calculateSum();
// console.log("🚀 ~ file: app.js ~ line 114 ~ result", result);

// console.log("🚀 ~ file: app.js ~ line 57 ~ plan1", plan1);

function calcualteDiscount(plan) {
  var bestPrice = plan.price;
  var currentMonth = 5;
  var isValid = plan.discountedMonths.includes(currentMonth);
  if (isValid) {
    bestPrice = plan.price * 0.5;
  }
  return bestPrice;
}

var result = calcualteDiscount(plan1);
// console.log("🚀 ~ file: app.js ~ line 128 ~ result", result);

//TBC......
