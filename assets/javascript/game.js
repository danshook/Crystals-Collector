$(document).ready(function() {
  // Generate random number between 19 and 120.
  var minNumber = 19;
  var maxNumber = 120;

  var randomNumber = randomNumberFromRange(minNumber, maxNumber);

  function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  console.log(randomNumber);

  // When start new game button is clicked...
  $("#startNewGame").on("click", function() {
    $("#randomNumber").text(randomNumber);
  });
});

// Test to see if JavaScript is loading.
// $(function() {
//   alert("JavaScript Loaded!");
// });
