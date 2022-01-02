//Chapter # 71

var plan1 = {
  name: "Basic",
  price: 19,
  space: "100 GB",
};

var plan2 = {
  name: "Professional",
  price: "$30",
  space: "500 GB",
};

var plan3 = {
  name: "Ultimate",
  price: "$50",
  space: "1 TB",
};

plan1.name = "Starter";
plan1.discountedMonths = [5, 1, 8];
plan1.isAvailable = true;

plan1.moreInfo = {
  date: new Date(),
};

delete plan1.isAvailable;
delete plan1.moreInfo;

var flag = "name" in plan1;
var flag = "names" in plan1;

plan1.calculateSum = function () {
  return 2 + 2;
};

var result = plan1.calculateSum();

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

// console.log(this)

function check() {
  console.log(this);
}
// check()

plan1.calcDiscount = function () {
  var bestPrice = this.price;
  var currentMonth = 5;
  var isValid = this.discountedMonths.includes(currentMonth);
  if (isValid) {
    bestPrice = this.price * 0.5;
  }
  return bestPrice;
};

plan2.calcDiscount = function () {
  console.log(this.name);
};

var res = plan1.calcDiscount();
// console.log("🚀 ~ file: app.js ~ line 76 ~ res", res)

//Chapter # 72

//Constructor Functions

function CreateProduct(name, brand, price) {
  this.name = name;
  this.brand = brand;
  this.price = price;
  this.discountedMonths = [1, 2, 4, 5];
  this.calcDiscount = function () {
    var bestPrice = this.price;
    var currentMonth = 5;
    var isValid = this.discountedMonths.includes(currentMonth);
    if (isValid) {
      bestPrice = this.price * 0.5;
    }
    return bestPrice;
  };
}

var product1 = new CreateProduct("Dew", "Pepsi", 50);
var product2 = new CreateProduct("Pizza", "California", 500);

product1.qty = 100;
delete product1.qty;

// console.log("🚀 ~ file: app.js ~ line 89 ~ product1", product1.calcDiscount());
// console.log("🚀 ~ file: app.js ~ line 90 ~ product2", product2.calcDiscount())

//Chapter # 74

function GenerateMobile(model, brand, price) {
  this.model = model;
  this.brand = brand;
  this.price = price;
  this.discountedMonths = [1, 2];
}

GenerateMobile.prototype.calcDiscount = function (plan) {
  var bestPrice = plan.price;
  var currentMonth = 5;
  var isValid = plan.discountedMonths.includes(currentMonth);
  if (isValid) {
    bestPrice = plan.price * 0.5;
  }
  return bestPrice;
};

GenerateMobile.prototype.type = "Mobile";
GenerateMobile.prototype.isAvailable = true;

var mob1 = new GenerateMobile("Infinix Note 7", "Infinix", 28000);
var mob2 = new GenerateMobile("Infinix Note 10", "Infinix", 35000);

// console.log("🚀 ~ file: app.js ~ line 115 ~ mob1", mob1.__proto__.calcDiscount(mob1));
// console.log("🚀 ~ file: app.js ~ line 116 ~ mob2", mob2);

//Chapter # 75

var data = {
  name: "Hasnain Ali",
  email: "mjhasnain15@gmail.com",
  phone: "0310-2932665",
};

var gotTheProperty = "phone" in data; //New Approach
// console.log("🚀 ~ file: app.js ~ line 143 ~ gotTheProperty", gotTheProperty)

var isOwnedProperty = data.hasOwnProperty("email"); //Old School
// console.log("🚀 ~ file: app.js ~ line 146 ~ isOwnedProperty", isOwnedProperty)

//Chapter # 76

// console.log(window.location)

// window.location.href = return you the current page url
// window.location.hostname = return you the current hostname
// window.location.pathname = return you the current pathname
//window.location.hash = return you the current bookmark of the page

//window.location.href = 'https://www.fb.com' = navigate to the specific url
//window.location.href = "http://www.me.com/1.html#section9"; = navigate to the specific id of the page

//Chapter # 77
//window.location.assign("http://www.me.com");  = same as href

// window.location.replace("http://www.me.com/lojack.html#guarantee"); = //replace your current one with the new one
//window.location.reload(); = reload your page

//Chapter # 78

// history.back(); = // navigate to back if exists
//history.forward(); = // navigate to forward if exists

// history.go(-3); = //navigate to the third level of backward screens

//Chapter # 79

// window.open(); = open new window

// var monkeyWindow = window.open();
// var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
//  monkeyWindow.document.write(windowContent);

// window.open("http://www.animals.com/capuchin.html");

// monkeyWindow.close();

//Chapter # 80

// var monkeyWindow = window.open("monk.html", "win1", "width=420,height=380, left=200,top=100");

//Chapter # 81 Learn by yourself

//Chapter # 82

function getUsername() {
  var username = document.getElementById("username").value;
  if (!username) return console.log("enter name");
  if (username.includes("@")) return console.log("invalid username");
}

//Chapter # 83

function getLine() {
  var lines = document.getElementById("lines").value;
  if (!lines) return console.log("please select your sim type");
}

//Chapter # 84

function getAnimal() {
  var animals = document.getElementsByName("r1");
  var found = false;
  for (var i = 0; i < animals.length; i++) {
    if (animals[i].checked) {
      found = true;
      break;
    }
  }

  if (!found) return console.log("please select any animal");
}

//Chapter # 85

function getZip() {
  var zip = document.getElementById("zip").value;
  if (!zip) return console.log("enter zip");
  if (zip.length < 5) return console.log("invalid length");
}

//Chapter # 86

function getEmail() {
  var emailRagex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = document.getElementById("email").value;
  if (!email) return console.log("enter email");
  if (!email.match(emailRagex)) return console.log("invalid email");
}

//Chapter # 87

//Exceptional Handling
function sayHi() {
  try {
    alrt("Hi");
  } catch (error) {
    console.log("🚀 ~ file: app.js ~ line 246 ~ sayHi ~ error", error);
  }
}

// sayHi();

// console.log("last");

//Chapter # 88

function getEmail() {
  try {
    var emailRagex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email").value;
    if (!email) throw "enter email";
    if (!email.match(emailRagex)) throw "invalid email";
  } catch (error) {
    console.log("🚀 ~ file: app.js ~ line 265 ~ getEmail ~ error", error);
  }
}

//Chapter # 89
//document get element by id
//events (onClick, onLoad, Etc...)