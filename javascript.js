function computerPlay() {
    var choices = ["rock", "paper", "scissors"]
    var randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function playRound() {
    let playerSelection = prompt("Choose: rock, paper, scissors").toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return 1;
        }
        if (computerSelection == "paper") {
            return 0;
        }
        if (computerSelection == "rock") {
            return 2;
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            return 2;
        }
        if (computerSelection == "paper") {
            return 1;
        }
        if (computerSelection == "rock") {
            return 0;
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return 0;
        }
        if (computerSelection == "paper") {
            return 2;
        }
        if (computerSelection == "rock") {
            return 1;
        }
    }
}

function getWinner() {
    if (playRound() == 2) {
        console.log("It's a tie!")
    }
    else if (playRound() == 0) {
        console.log("Player wins!")
    }
    else if (playRound() == 2) {
        console.log("Computer wins!")
    }
}

getWinner();


