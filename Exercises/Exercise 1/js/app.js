var arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  ["Abc"],
  ["Xyz"],
  ["Etc"],
  ["..."],
  {},
  {},
  {},
];

var strs = [];
var nums = [];
var bools = [];
var arrs = [];
var objs = [];

for (var i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    strs.push(arr[i]);
  }

  if (typeof arr[i] === "number") {
    nums.push(arr[i]);
  }

  if (typeof arr[i] === "boolean") {
    bools.push(arr[i]);
  }

  if (typeof arr[i] === "object" && arr[i].length) {
    arrs.push(arr[i]);
  }

  if (typeof arr[i] === "object" && !arr[i].length) {
    objs.push(arr[i]);
  }
}

var newArr = [strs, nums, bools, arrs, objs];
console.log("🚀 ~ file: app.js ~ line 55 ~ newArr", newArr);
