/***************
Global Variables 
****************/

// Set minimum and maximum range for random game number (aka targetScore)
var minTarget = 19;
var maxTarget = 120;

// Set minimum and maximum range for random crystal values (red, blue, yellow, and green crystals)
var minCrystal = 1;
var maxCrystal = 12;

// Set variables for wins and losses. They start at zero.
var winner = 0;
var loser = 0;

// Random number generated new each game between the min and max values (minTarget and maxTarget) that the user must try and match using the values assigned to the four crystals.
var targetScore = 0;

// Users running total using values from four crystals. This number needs to equal targetScore to win game.
var myScore = 0;

/******** 
Functions
*********/

// Generate random number
function randomNumberFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Only function that runs automatically at beginning of game.
function startGame() {
  // Generates and displays the random game number, using minimum (minTarget) and maximum (maxTarget) values.
  targetScore = randomNumberFromRange(minTarget, maxTarget);
  console.log("TARGET SCORE: " + targetScore);
  $("#targetScore").text(targetScore);
  $("#myScore").text(myScore);
  console.log("MY SCORE: " + myScore);
  // Generates random values for each color crystal using minimum (minCrystal) and maximum (maxCrystal) values.
  redCrystal = randomNumberFromRange(minCrystal, maxCrystal);
  blueCrystal = randomNumberFromRange(minCrystal, maxCrystal);
  yellowCrystal = randomNumberFromRange(minCrystal, maxCrystal);
  greenCrystal = randomNumberFromRange(minCrystal, maxCrystal);
  // Displays wins and losses.
  $("#winner").text(winner);
  $("#loser").text(loser);
}

// Updates and displays users score (myScore) based on the clicking of the colored crystals with their respective values.
function crystalClick(color) {
  console.log(color + " CRYSTAL CLICK: ");
  if (color === "red") {
    myScore = parseInt(myScore, 10) + parseInt(redCrystal, 10);
  } else if (color === "blue") {
    myScore = parseInt(myScore, 10) + parseInt(blueCrystal, 10);
  } else if (color === "yellow") {
    myScore = parseInt(myScore, 10) + parseInt(yellowCrystal, 10);
  } else if (color === "green") {
    myScore = parseInt(myScore, 10) + parseInt(greenCrystal, 10);
  }
  $("#myScore").text(myScore);
  // Checks to see if users score (myScore) equals the random number (target score). If they equal, displays 'You Win', calls function 'endGameWinner'.
  if (myScore === targetScore) {
    alert("You Won!");
    endGameWinner();
  }
  // Checks to see if users score is greater than the random number (target score). If it is greater, displays 'You lose', updates 'losses' and resets game.
  if (myScore > targetScore) {
    alert("You lose");
    endGameLoser();
  }
}
// Updates 'wins' by 1, sets users score (myScore) to zero and calls function 'startGame' to reset game.
function endGameWinner() {
  $("#winner").text(winner++);
  myScore = 0;
  startGame();
}
// Updates 'losses' by 1, sets user score (myScore) to zero and calls function 'startGame' to reset game.
function endGameLoser() {
  $("#loser").text(loser++);
  myScore = 0;
  startGame();
}

/***********
Main Process 
************/

startGame();
// Waits until user clicks on the Red Crystal. Once the user does, it calls the function 'crystalClick' with respective color being 'red'.
$("#redCrystalButton").click(function() {
  crystalClick("red");
});
// Waits until user clicks on the Blue Crystal. Once the user does, it calls the function 'crystalClick' with respective color being 'blue'.
$("#blueCrystalButton").click(function() {
  crystalClick("blue");
});
// Waits until user clicks on the Yellow Crystal. Once the user does, it calls the function 'crystalClick' with respective color being 'yellow'.
$("#yellowCrystalButton").click(function() {
  crystalClick("yellow");
});
// Waits until user clicks on the Green Crystal. Once the user does, it calls the function 'crystalClick' with respective color being 'green'.
$("#greenCrystalButton").click(function() {
  crystalClick("green");
});
