function sleepFor(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) {}
}

// console.log("start....");
// sleepFor(5000);
// console.log("stop.....");
// sleepFor(3000);
// console.log("again start.....");

//Let's start the coding for live cricket match

var teams = ["Pak", "Ind", "Sri", "Win", "Rsa", "Aus", "Eng", "Nz", "Ban"];
var overs = Number(prompt("Enter no. of overs you want to play..."));
var myTeam = "";
var optTeam = "";
var batTeam = "";
var ballTeam = "";

var batTeamScore = 0;
var batTeamWickets = 0;

var ballTeamScore = 0;
var ballTeamWickets = 0;

if (isNaN(overs)) {
  alert("Please enter overs in number only");
} else {
  myTeam = prompt("Enter your team name");
  optTeam = prompt("Enter opponent team name");
  if (!myTeam) {
    alert("Your team name is missing!");
  } else if (!optTeam) {
    alert("Opponent team name is missing");
  } else {
    console.log(overs + " overs match will be start soon....");
    sleepFor(2000);
    console.log(myTeam + " VS " + optTeam);
    sleepFor(1000);
    var coin = Number(prompt("Enter 1 for head and 0 for tail"));
    if (coin > 1 || coin < 0) {
      alert("Invalid toss option selected!");
    } else {
      var toss = Math.round(Math.random() * 1);
      if (toss == coin) {
        batTeam = myTeam;
        ballTeam = optTeam;
      } else {
        batTeam = optTeam;
        ballTeam = myTeam;
      }
      console.log(batTeam + " won the toss and ready to bat first");
      sleepFor(1000);
      for (var i = 1; i <= overs; i++) {
        if (batTeamWickets === 10) {
          break;
        }
        console.log(
          "Over : " +
            i +
            " started " +
            batTeam +
            ":" +
            batTeamScore +
            "-" +
            batTeamWickets
        );
        sleepFor(2000);
        for (var j = 1; j <= 6; j++) {
          if (batTeamWickets === 10) {
            break;
          }
          var shot = Math.round(Math.random() * 6);
          if (shot === 0) {
            ++batTeamWickets;
            sleepFor(2000);
            console.log("Ohhh... Its a clean bold");
          }
          if (shot === 1) {
            batTeamScore += 1;
            sleepFor(1000);
            console.log("Easy single");
          }
          if (shot === 2) {
            batTeamScore += 2;
            sleepFor(1000);
            console.log("Takes double");
          }
          if (shot === 3) {
            batTeamScore += 3;
            sleepFor(1000);
            console.log("Good running between the wickets takes 3");
          }
          if (shot === 4) {
            batTeamScore += 4;
            sleepFor(2000);
            console.log("Beautiful cover drive its 4");
          }
          if (shot === 5) {
            sleepFor(1000);
            console.log("Dot ball :(");
          }
          if (shot === 6) {
            batTeamScore += 6;
            sleepFor(3000);
            console.log("Out of the park 6 runs");
          }
        }
      }

      console.log(batTeamScore + "-" + batTeamWickets);
      sleepFor(1000);
      console.log(
        ballTeam + " needs " + (batTeamScore + 1) + " in " + overs + " overs"
      );
      sleepFor(1000);

      for (var i = 1; i <= overs; i++) {
        if (ballTeamWickets === 10) {
          break;
        }
        console.log(
          "Over : " +
            i +
            " started " +
            ballTeam +
            ":" +
            ballTeamScore +
            "-" +
            ballTeamWickets
        );
        sleepFor(2000);
        for (var j = 1; j <= 6; j++) {
          if (ballTeamWickets === 10) {
            break;
          }

          if (batTeamScore > batTeamScore) {
            break;
          }

          var shot = Math.round(Math.random() * 6);
          if (shot === 0) {
            ++ballTeamWickets;
            sleepFor(2000);
            console.log("Ohhh... Its a clean bold");
          }
          if (shot === 1) {
            ballTeamScore += 1;
            sleepFor(1000);
            console.log("Easy single");
          }
          if (shot === 2) {
            ballTeamScore += 2;
            sleepFor(1000);
            console.log("Takes double");
          }
          if (shot === 3) {
            ballTeamScore += 3;
            sleepFor(1000);
            console.log("Good running between the wickets takes 3");
          }
          if (shot === 4) {
            ballTeamScore += 4;
            sleepFor(2000);
            console.log("Beautiful cover drive its 4");
          }
          if (shot === 5) {
            sleepFor(1000);
            console.log("Dot ball :(");
          }
          if (shot === 6) {
            ballTeamScore += 6;
            sleepFor(3000);
            console.log("Out of the park 6 runs");
          }
        }
      }

      if (batTeamScore == ballTeamScore) {
        console.log("Math Draw");
      } else if (batTeamScore > ballTeamScore) {
        console.log(batTeam + " won the match");
      } else {
        console.log(ballTeam + " won the match");
      }
    }
  }
}
