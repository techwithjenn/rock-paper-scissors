let roundWinner = '';
let computerSelection = '';
let playerSelection = '';
let playerScore = 0;
let computerScore = 0;
let result = '';

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}


const playerScoreUpdate = document.getElementById('player-score')
const computerScoreUpdate = document.getElementById('computer-score')

function playRound(playerSelection) {
    var choices = ["rock", "paper", "scissors"]
    computerSelection = choices[Math.floor(Math.random() * choices.length)];

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")) {
        playerScore += 1
        roundWinner = 'player'
        result = 'Congrats, you won this round.'

        playerScoreUpdate.innerHTML = 'Player Score: ' + playerScore;
    }
    if (
        (playerSelection === "rock" && computerSelection == "paper") ||
        (playerSelection === "scissors" && computerSelection == "rock") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
        computerScore += 1
        result = 'Sorry, the computer won this round.'
        computerScoreUpdate.innerHTML = 'Computer Score: ' + computerScore;
        roundWinner = 'computer';
    }
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
        result = 'Well, it was a tie!'
    }
    resultInfo = document.getElementById('result')
    resultInfo.textContent = result;
}



const buttons = document.querySelectorAll('button')

buttons.forEach(elem => {
    elem.addEventListener('click', function() {
        playRound(elem.id)
        if (isGameOver()) {
            if (playerScore === 5) {
                result = 'Game is over! You won! Refresh the page to play again.'
            }
            else {
                result = 'Game is over! The computer won! Refresh the page to play again.'
            }
            const weaponsBox = document.getElementById('weapons');
            weaponsBox.style.display = 'none';
            resultInfo = document.getElementById('result')
            resultInfo.textContent = result;
        }
    }
)})


