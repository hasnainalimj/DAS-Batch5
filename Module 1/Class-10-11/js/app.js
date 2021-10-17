//Chapter # 35

// => Functions => which makes your code module based // Break your code in chunks // Also you can reuse it

// function funcName() {
//     //Statemenet
// }

//Type of functions
// 1) Simple Function (Non Parameterized)
// 2) Parameterize Function

// showConsole();

// 1) Simple Function (Non Parameterized)
function showConsole() {
  console.log("This is executed");
}

function showAlert() {
  alert("This is alert");
}

// showConsole();
// showAlert()

//void means 0 which returns nothing

function showCurrentTime() {
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  console.log("time: " + theHr + ":" + theMin);
}

// showCurrentTime()
// showCurrentTime()
// showCurrentTime()

//Chapter # 36

// 2) Parameterize Function
function sayHelloTo(name) {
  alert("Hello, " + name);
}

// sayHelloTo()

// function calculator(num1, num2, op) {
//   if (op == "+") {
//     console.log("Adding: ", num1 + num2);
//   } else if (op == "-") {
//     console.log("Subtracting: ", num1 - num2);
//   } else if (op == "*") {
//     console.log("Multiplication: ", num1 * num2);
//   } else if (op == "/") {
//     console.log("Division: ", num1 / num2);
//   } else if (op == "%") {
//     console.log("Reminder: ", num1 % num2);
//   } else {
//     alert("Invalid Operator!");
//   }
// }

//Chapter # 37

//Global Scope
//Local Scope

function getValue() {
  var value = 10.99;
  return value;
}

var value = getValue();
// console.log(value);

function getString(string) {
  return string;
}

var str = getString("Public");
// console.log("🚀 ~ file: app.js ~ line 83 ~ str", str)

function exampleOfReturn() {
  return "Return";
  alert("Running");
}

var check = exampleOfReturn();
// console.log("🚀 ~ file: app.js ~ line 91 ~ check", check);

function validate(input) {
  if (!input) return console.log("Enter Input!"); //Early Return

  console.log(input);
}

// validate()
// validate('Abc')

//Chapter # 39 - 40

function calculator(op) {
  switch (
    op //if(op)
  ) {
    case "+":
      console.log("Adding");
      break;

    case "-":
      console.log("Subtracting");
      break;

    case "*":
      console.log("Multiplication");
      break;

    case "/":
      console.log("Division");
      break;

    case "%":
      console.log("Reminder");
      break;

    default:
      console.log("Invalid Input!");
  }
}

// calculator("%")
// calculator("-");
// calculator("/");
// calculator("V");

//Chapter # 41

// for(var i=0; i<10; i++) {
//     console.log(i)
// }

// var i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

//Chapter # 42

// var i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

//Chapter # 43
//1) Inline
//2) Internal
//3) External

//Chapter # 44
// This is how you can comment your code
