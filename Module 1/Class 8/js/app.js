//Chapter # 21

var nationality = "pakistani";
var city = "KaRaChi";

// console.log(nationality.toUpperCase())
// console.log(city.toLowerCase())
// console.log(city.toUpperCase())

//Chapter # 22

var message = "The quick brown fox jumps over the lazy dog.";

// if(message.length > 10) {
//   var trimMessage = message.slice(0,9) + '...'
//   console.log("🚀 ~ file: app.js ~ line 17 ~ trimMessage", trimMessage)
// } else {
//   console.log(message)
// }

var testingText = message.slice(5);
// console.log("🚀 ~ file: app.js ~ line 23 ~ testingText", testingText)

var firstChar = nationality[0].toUpperCase(); //p => P
// console.log("🚀 ~ file: app.js ~ line 12 ~ firstChar", firstChar)

var restChar = nationality.slice(1); //akistani
// console.log("🚀 ~ file: app.js ~ line 29 ~ restChar", restChar)

nationality = firstChar + restChar;
// nationality = nationality[0].toUpperCase()+nationality.slice(1)
// console.log("🚀 ~ file: app.js ~ line 32 ~ nationality", nationality)

// var month = prompt("Enter month name i.e: December");

// if (month.length > 3) {
//   var abbr = month.slice(0, 3);
//   console.log(abbr);
// } else {
//   console.log(month);
// }

// var str = prompt("Enter some text"); //Tea  Cup

// for (var i = 0; i < str.length; i++) {
//   // console.log(i)
//   if (str.slice(i, i + 2) == "  ") { //5 , 5+2 = 7
//     console.log("Double spaces not allowed!");
//     break;
//   }
// }

// 0 , 0 + 2 = 2,  str.slice(0,2) = 'Te' === '  '
// 1 , 1 + 2 = 3, str.slice(1,3) = 'ea' === '  '
// 2 , 2 + 2 = 4, str.slice(2,4) = 'a ' === '  '
// 3 , 3 + 2 = 5, str.slice(4,5) = '  ' === '  '

// for (var i = 0; i < str.length; i++) {
//   if (str.slice(i, i + 1) == "@") {
//     console.log("@ exists");
//     break;
//   }
// }

//Chapter # 23

var paragraph =
  "The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog brown.";
console.log("🚀 ~ file: app.js ~ line 68 ~ paragraph", paragraph);

// for(var i=0; i<paragraph.length; i++) {
//   if(paragraph.slice(i ,i+5) == 'brown') {
//     paragraph = paragraph.slice(0,i) + 'blue' + paragraph.slice(i+5)
//   }
// }

// console.log("🚀 ~ file: app.js ~ line 68 ~ paragraph", paragraph)

var firstChar = paragraph.indexOf("brown");
// console.log("🚀 ~ file: app.js ~ line 77 ~ firstChar", firstChar);

// if (firstChar !== -1) {
//   paragraph =
//   paragraph.slice(0, firstChar) + "red" + paragraph.slice(firstChar + 5);
// }

// console.log("🚀 ~ file: app.js ~ line 83 ~ paragraph", paragraph)

var lastChar = paragraph.lastIndexOf("brown");
// console.log("🚀 ~ file: app.js ~ line 89 ~ lastChar", lastChar)

//Chapter # 24

var name = "Imran Khan";
// console.log("🚀 ~ file: app.js ~ line 94 ~ name", name[0])

var result = name.charAt(1);
// console.log("🚀 ~ file: app.js ~ line 97 ~ result", result)

var checkingText = "Hello World!";

// for (var i = 0; i < checkingText.length; i++) {
//   if (checkingText.charAt(i) == "!") {
//     console.log("Exclamation mark found.....");
//     break;
//   }
// }

//Chapter # 25

// var updatedText = paragraph.replace("brown", "yellow"); //Update only first occurence
// console.log("🚀 ~ file: app.js ~ line 111 ~ updatedText", updatedText);

// var updatedText = paragraph.replace(/brown/g, "yellow"); //Global Update/Replace
// console.log("🚀 ~ file: app.js ~ line 115 ~ updatedText", updatedText)

// var updatedText = paragraph.replace(/fox/g, "lomri"); //Global Update/Replace
// console.log("🚀 ~ file: app.js ~ line 118 ~ updatedText", updatedText)
