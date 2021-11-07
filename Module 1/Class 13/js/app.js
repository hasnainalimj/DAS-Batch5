//Chapter # 48

function makeBg(element) {
  // console.log("🚀 ~ file: app.js ~ line 4 ~ makeBg ~ element", element);
  element.style.backgroundColor = "yellow";
}

function removeBg(element) {
  // console.log("🚀 ~ file: app.js ~ line 9 ~ removeBg ~ element", element);
  element.style.backgroundColor = "white";
}

//Chapter # 49

function getValue() {
  // var name = document.getElementById("txtName").value
  var heading = document.getElementById("heading").innerHTML;
  // console.log(name);
  // console.log(heading)

  var name = document.getElementById("txtName");

  if (!name.value) {
    console.log("Please enter your name");
    name.style.backgroundColor = "red";
  } else {
    console.log(name.value);
    name.style.backgroundColor = "white";
  }
}

//Chapter # 50

function getProvince() {
  var city = document.getElementById("cities").value;
  var heading = document.getElementById("txtProvince");
  if (!city) return alert("Select city!");

  if (city === "karachi") {
    heading.innerHTML = "Sindh";
  } else if (city === "lahore") {
    heading.innerHTML = "Punjab";
  } else {
    heading.innerHTML = "KPK";
  }
}

//Chapter # 51

var paragraph = document.getElementById("paragraph");
var text =
  "The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog ";

paragraph.innerHTML = text.slice(0, 20) + "...";

function read() {
  var btn = document.getElementById("reading");

  if (btn.innerHTML == "Read more") {
    paragraph.innerHTML = text;
    btn.innerHTML = "Read less";
  } else {
    btn.innerHTML = "Read more";
    paragraph.innerHTML = text.slice(0, 20) + "...";
  }
}

//Chapter # 52 & 53

function changeInImg() {
  var img = document.getElementById("img")
    img.src = "assets/img2.png";
}

function changeOutImg() {
  var img = document.getElementById("img")
    img.src = "assets/img1.jpg";
}

function increase() {
  var numberHeading = document.getElementById('number')
  numberHeading.innerHTML += '2932665'  
}


