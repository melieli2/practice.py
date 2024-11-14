// Generate a random number between 10 and 80
let numToGuess = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
let guess = null;

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const message = document.getElementById("message");

    if (isNaN(userGuess) || userGuess < 10 || userGuess > 80) {
        message.textContent = "Please enter a valid number between 10 and 80.";
        message.style.color = "red";
        return;
    }

    if (userGuess < numToGuess) {
        message.textContent = "Too Low!";
        message.style.color = "orange";
    } else if (userGuess > numToGuess) {
        message.textContent = "Too High!";
        message.style.color = "orange";
    } else {
        message.textContent = "Correct! You guessed it!";
        message.style.color = "green";
        document.getElementById("resetButton").style.display = "block";
    }

    // Clear the input field for the next guess
    document.getElementById("userGuess").value = "";
}

// Function to reset the game
function resetGame() {
    numToGuess = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
    document.getElementById("message").textContent = "";
    document.getElementById("userGuess").value = "";
    document.getElementById("resetButton").style.display = "none";
}