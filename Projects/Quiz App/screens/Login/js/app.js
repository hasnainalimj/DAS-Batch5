function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!email) return alert("Please enter your email!");
  if (!password) return alert("Please enter your password!");

  location.replace("../Home/index.html");
}
