let favNumber = 13; 

let guess;
let guessCount = 0;

while (true) {
  guess = parseInt(prompt("Guess my favorite number:"));
  guessCount++;

  if (guess === favNumber) {
    console.log("correct");
    break;
  } else if (guess < favNumber) {
    console.log("too high");
  } else {
    console.log("too low");
   }  
} 
