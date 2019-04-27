
// MAIN PROCESS
// ==============================================================================

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 9;


document.onkeyup = function(event) {

  var letter = event.key.toLowerCase();

  var completter = alphabet[Math.floor(Math.random() * alphabet.length)];

  


  if (letter != completter) {
      guesses--;
      document.getElementById("guesses-left").innerHTML = guesses;

      var currentguess = document.getElementById("guesses-so-far");

      var newDiv = document.createElement("a");

      newDiv.textContent = letter + ",";

      currentguess.appendChild(newDiv);


      if(guesses === 0) {
          losses++;
          document.getElementById("losses-count").innerHTML = losses;
          guesses = 9;
          document.getElementById("guesses-left").innerHTML = guesses;
          currentguess.innerHTML = " ";
      }
  }
  else {
    wins++;
    document.getElementById("wins-count").innerHTML = wins;
    guesses = 9;
    document.getElementById("guesses-left").innerHTML = guesses;
    document.getElementById("guesses-so-far").innerHTML = " ";



  }


  console.log(completter + letter);
  console.log(guesses);

};