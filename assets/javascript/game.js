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

// Random number that player uses to try and match target score.
// Number remains same during game and resets at new game.
var redCrystal = 0;
var blueCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;

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
}

function redCrystalClick() {
  var redCrystal = randomNumberFromRange(minCrystal, maxCrystal);
  console.log("RED CRYSTAL CLICK: " + redCrystal);
  myScore = parseInt(myScore, 10) + parseInt(redCrystal, 10);
  $("#myScore").text(myScore);
}

/***********
Main Process 
************/

startGame();

if (redCrystal <= 0) {
  $("#redCrystalButton").click(function() {
    redCrystalClick();
  });
} else {
  alert("next step!");
}
