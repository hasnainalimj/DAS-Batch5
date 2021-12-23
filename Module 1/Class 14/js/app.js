//Chapter # 54

var label = document.getElementById("label");
// label.style.color ='red'
// label.style.color ='pink'
// label.innerHTML = 'Pakistan'
// console.log("🚀 ~ file: app.js ~ line 3 ~ label", label)

function getEmail() {
  var txtEmail = document.getElementById("txtEmail");
  var error = document.getElementById("error");
  // if(!txtEmail.value) {
  //   return txtEmail.style.backgroundColor = 'red'
  // } else {
  //   console.log("🚀 ~ file: app.js ~ line 11 ~ getEmail ~ txtEmail", txtEmail.value)
  //   return txtEmail.style.backgroundColor = 'white'
  // }

  if (!txtEmail.value) {
    error.innerHTML = "Enter your email!";
  } else if (!txtEmail.value.includes("@") || !txtEmail.value.includes(".")) {
    error.innerHTML = "Invalid email!";
  } else if (txtEmail.value.length < 7) {
    error.innerHTML = "Length error!";
  } else {
    error.innerHTML = "";
    console.log("Submitted", txtEmail.value);
  }
}

function changeImg() {
  var img = document.getElementById("img");
  img.src = "assets/img2.png";
}

//Chapter # 55

var xyz = document.getElementById("xyz");
// xyz.className = 'testing' //Reolace the old classes with the new cne

xyz.className += " testing";
// xyz.style.cssFloat = "left";

//Chapter # 56

var elements = document.getElementsByTagName("h2");
// console.log("🚀 ~ file: app.js ~ line 46 ~ elements", elements)

for (var i = 0; i < elements.length; i++) {
  if (i % 2 == 0) {
    elements[i].style.color = "red";
  } else {
    elements[i].style.color = "blue";
  }
}

//Chapter # 57

var scope = document.getElementById("scope");
// console.log("🚀 ~ file: app.js ~ line 60 ~ scope", scope)

var h2s = scope.getElementsByTagName("h2");
// console.log("🚀 ~ file: app.js ~ line 63 ~ h2s", h2s);

var td = document.getElementsByTagName("td");
// console.log("🚀 ~ file: app.js ~ line 65 ~ td", td)

for (var i = 0; i < td.length; i++) {
  if (i % 2 == 0) {
    td[i].style.backgroundColor = "red";
  } else {
    td[i].style.backgroundColor = "blue";
  }
}

//Chapter # 58,59,61,62,63

// document.childNodes[1].childNodes[4].childNodes[1].childNodes[0]

//Node type of element is 1 and node type of text is 3
//element.nodeType
//element.nodeName

//parentNode.firstChild;
// parentNode.lastChild;
// firstEl.nextSibling;
// firstEl.previousSibling;
// target.nodeValue;
// var liElements = getElementsByTagName("li").length

//Chapter # 65,66

var anchor = document.getElementById("anchor");
// console.log("🚀 ~ file: app.js ~ line 95 ~ anchor", anchor)

// var result = anchor.hasAttribute('href')
// var result = anchor.hasAttribute('alt')
// console.log("🚀 ~ file: app.js ~ line 98 ~ result", result)

// var myAttr = anchor.getAttribute('href')
// var myAttr = anchor.getAttribute('alt')
// console.log("🚀 ~ file: app.js ~ line 102 ~ myAttr", myAttr)

anchor.setAttribute("class", "testing");
// console.log("🚀 ~ file: app.js ~ line 95 ~ anchor", anchor);

var lengthOfAttr = anchor.attributes
// console.log("🚀 ~ file: app.js ~ line 108 ~ lengthOfAttr", lengthOfAttr)