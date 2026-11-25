// Store the game scores
let wins = 0;
let losses = 0;
let draws = 0;

// Store all round results
let results = [];

// Check whether the game has started
let gameStarted = false;

// Count the number of rounds
let round = 0;

// Store image filenames
let images = {
    rock: "rock.png",
    paper: "paper.png",
    scissors: "scissors.jpg"
};


// Function to start the game
function startGame() {

    // Get the player's name
    let name = document.getElementById("playerName").value;

    // Check whether the name is empty
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Set the game status to started
    gameStarted = true;

    // Display welcome message
    document.getElementById("welcome").innerHTML =
        "Welcome, " + name + "!";

    // Display the starting date and time
    document.getElementById("startTime").innerHTML =
        "Game started on: " + new Date();
}


// Function to generate computer's random choice
function getComputerChoice() {

    // Create an array of choices
    let choices = ["rock", "paper", "scissors"];

    // Generate a random number from 0 to 2
    let randomNumber = Math.floor(Math.random() * 3);

    // Return the computer's choice
    return choices[randomNumber];
}


// Function to play one round
function playRound(playerChoice) {

    // Check whether the game has started
    if (gameStarted === false) {
        alert("Click Start Game first.");
        return;
    }

    // Get the computer's choice
    let computerChoice = getComputerChoice();

    // Increase the round number
    round++;

    // Store the result
    let result;

    // Decide the winner
    if (playerChoice === computerChoice) {

        result = "Draw";
        draws++;

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {

        result = "Win";
        wins++;

    } else {

        result = "Lose";
        losses++;

    }

    // Change the player's image
    document.getElementById("playerImg").src =
        images[playerChoice];

    // Change the computer's image
    document.getElementById("computerImg").src =
        images[computerChoice];

    // Display the result
    document.getElementById("result").innerHTML =
        "You chose " + playerChoice +
        ". Computer chose " + computerChoice +
        ". You " + result + "!";

    // Change the result colour
    if (result === "Win") {

        document.getElementById("result").style.color = "green";

    } else if (result === "Lose") {

        document.getElementById("result").style.color = "red";

    } else {

        document.getElementById("result").style.color = "grey";

    }

    // Update the scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Store the result in the array
    results.push(result);

    // Add a new row to the history table
    document.getElementById("history").innerHTML +=
        "<tr>" +
        "<td>" + round + "</td>" +
        "<td>" + playerChoice + "</td>" +
        "<td>" + computerChoice + "</td>" +
        "<td>" + result + "</td>" +
        "</tr>";

}


// Function to display game summary
function showSummary() {

    // Count the number of wins using a for loop
    let totalWins = 0;

    for (let i = 0; i < results.length; i++) {

        if (results[i] === "Win") {
            totalWins++;
        }

    }

    // Calculate the total rounds
    let totalRounds = results.length;

    // Calculate win percentage
    let percentage = 0;

    if (totalRounds > 0) {
        percentage = Math.round((totalWins / totalRounds) * 100);
    }

    // Display the summary
    document.getElementById("summary").innerHTML =
        "You played " + totalRounds +
        " rounds and won " + percentage + "%.";

}


// Function to reset the game
function resetGame() {

    // Reset all scores
    wins = 0;
    losses = 0;
    draws = 0;

    // Reset the round number
    round = 0;

    // Empty the results array
    results = [];

    // Update the scoreboard
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    // Clear the history table except the header row
    document.getElementById("history").innerHTML =
        "<tr>" +
        "<th>Round</th>" +
        "<th>You</th>" +
        "<th>Computer</th>" +
        "<th>Result</th>" +
        "</tr>";

    // Clear the result message
    document.getElementById("result").innerHTML = "";

    // Clear the summary
    document.getElementById("summary").innerHTML = "";

    // Reset the images
    document.getElementById("playerImg").src = images.rock;
    document.getElementById("computerImg").src = images.rock;

}
