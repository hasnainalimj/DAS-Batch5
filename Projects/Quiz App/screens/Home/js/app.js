function logout() {
  location.replace("../Login/index.html");
}

function checkQuiz(quiz) {
  location.href = "../QuizDetails/index.html";
}

function deleteQuiz(quiz) {
  console.log("delete quiz: ", quiz);
}

function gotoCreateQuiz() {
  location.href = "../CreateQuiz/index.html";
}

//Rendering List of quizes
var quizes = ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4"];

var quizSection = document.getElementById("quizSection");

for (var i = 0; i < quizes.length; i++) {
  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "quizContainer");

  var title = document.createElement("p");
  title.setAttribute("class", "title");
  title.innerHTML = quizes[i];
  title.addEventListener("click", checkQuiz.bind(null, quizes[i]), false);
  wrapper.appendChild(title);

  var deleteText = document.createElement("p");
  deleteText.setAttribute("class", "delete");
  deleteText.innerHTML = "Delete";
  deleteText.addEventListener("click", deleteQuiz.bind(null, quizes[i]), false);
  wrapper.appendChild(deleteText);

  quizSection.appendChild(wrapper);
}
