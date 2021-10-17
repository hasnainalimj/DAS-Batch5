var score = 0;

var ans1 = prompt("A for?").toLowerCase();
var ans2 = prompt("V for?").toLowerCase();
var ans3 = prompt("Z for?").toLowerCase();
var ans4 = prompt("K for?").toLowerCase();
var ans5 = prompt("U for?").toLowerCase();

if (ans1 == "apple") {
  ++score;
} else {
  --score;
}

if (ans2 == "ven") {
  ++score;
} else {
  --score;
}

if (ans3 == "zoo") {
  ++score;
} else {
  --score;
}

if (ans4 == "king") {
  ++score;
} else {
  --score;
}

if (ans5 == "umbrella") {
  ++score;
} else {
  --score;
}

console.log("Your score is: ", score);
