
// Array of letters for the user to guess.
var letters = ["h", "a", "k", "w"];

// Variables that hold the number of wins, losses and how many guesses user has left.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesDisplay = [];

// Variables for where in HTML things need to go.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guessesLeft-text");
var guessesDisplay = document.getElementById("guesses-text");

// This function runs when the user presses a key.

document.onkeyup = function() {
    var userguess = String.fromCharCode(event.keyCode).
        toLowerCase();
        console.log(userguess);



    // Randomly chooses a letter to be guessed.
    var chosenLetters = letters[Math.floor(Math.random()*letters.length)];

    // How to lose or win the game

    // for (var i=0; i < letters.length; i++){
        if ((userguess === "h") || 
        (userguess === "a") || 
        (userguess === "k") || 
        (userguess === "w")) {
        wins++;
    
        } else {
            losses++;
        
        }
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessesText.textContent = "Guesses Left: " + guessesLeft; 
        


    // }

   
}
   
    // Display the users progress in the game.
   






    







