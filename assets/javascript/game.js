/***************
Global Variables 
****************/

// Set minimum and maximum range for random game number (aka targetScore)
var minTarget = 19;
var maxTarget = 120;

// Set minimum and maximum range for random crystal values
var minCrystal = 1;
var maxCrystal = 12;

// Set wins and losses score
var winner = 0;
var loser = 0;

// Random number that user must try and match using crystals
var targetScore = 0;

//
var myScore = 0;

/******** 
Functions
*********/

// Generate random number using minimum and maximum values
function randomNumberFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame() {
  targetScore = randomNumberFromRange(minTarget, maxTarget);
  console.log("TARGET SCORE: " + targetScore);
  $("#targetScore").text(targetScore);
  $("#myScore").text(myScore);
  console.log("MY SCORE: " + myScore);
  redCrystal = randomNumberFromRange(minCrystal, maxCrystal);
  blueCrystal = randomNumberFromRange(minCrystal, maxCrystal);
  yellowCrystal = randomNumberFromRange(minCrystal, maxCrystal);
  greenCrystal = randomNumberFromRange(minCrystal, maxCrystal);
  $("#winner").text(winner);
  $("#loser").text(loser);
}

function redCrystalClick() {
  console.log("RED CRYSTAL CLICK: " + redCrystal);
  myScore = parseInt(myScore, 10) + parseInt(redCrystal, 10);
  $("#myScore").text(myScore);
  if (myScore === targetScore) {
    alert("You Won!");
    endGameWinner();
  }
  if (myScore > targetScore) {
    alert("You lose");
    endGameLoser();
  }
}

function blueCrystalClick() {
  console.log("BLUE CRYSTAL CLICK: " + blueCrystal);
  myScore = parseInt(myScore, 10) + parseInt(blueCrystal, 10);
  $("#myScore").text(myScore);
  if (myScore === targetScore) {
    alert("You Won!");
    endGameWinner();
  }
  if (myScore > targetScore) {
    alert("You lose");
    endGameLoser();
  }
}

function yellowCrystalClick() {
  console.log("YELLOW CRYSTAL CLICK: " + yellowCrystal);
  myScore = parseInt(myScore, 10) + parseInt(yellowCrystal, 10);
  $("#myScore").text(myScore);
  if (myScore === targetScore) {
    alert("You Won!");
    endGameWinner();
  }
  if (myScore > targetScore) {
    alert("You lose");
    endGameLoser();
  }
}

function greenCrystalClick() {
  console.log("GREEN CRYSTAL CLICK: " + greenCrystal);
  myScore = parseInt(myScore, 10) + parseInt(greenCrystal, 10);
  $("#myScore").text(myScore);
  if (myScore === targetScore) {
    alert("You Won!");
    endGameWinner();
  }
  if (myScore > targetScore) {
    alert("You lose");
    endGameLoser();
  }
}

function endGameWinner() {
  $("#winner").text(winner++);
  myScore = 0;
  startGame();
}

function endGameLoser() {
  $("#loser").text(loser++);
  myScore = 0;
  startGame();
}

/***********
Main Process 
************/

startGame();

$("#redCrystalButton").click(function() {
  redCrystalClick();
});
// check for end game function.

$("#blueCrystalButton").click(function() {
  blueCrystalClick();
});
// check for end game function.
$("#yellowCrystalButton").click(function() {
  yellowCrystalClick();
});
// check for end game function.

$("#greenCrystalButton").click(function() {
  greenCrystalClick();
});
