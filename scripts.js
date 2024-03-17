function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "Tie!";
        } else if (computerSelection === 'paper') {
            return "You lose! Rock loses to paper";
        } else if (computerSelection === 'scissors') {
            return "You win! Rock beats scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return "You win! paper beats rock";
        } else if (computerSelection === 'paper') {
            return "Tie!";
        } else if (computerSelection === 'scissors') {
            return "You lose! paper loses to scissors";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "You lose! scissors loses to rock";
        } else if (computerSelection === 'paper') {
            return "You win! scissors beats paper";
        } else if (computerSelection === 'scissors') {
            return "Tie!";
        }
    }
}

let playerScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll("#playerBtns");
btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        const playerSelection = e.target.innerText;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection)
        const displayResultDiv = document.querySelector("#displayResult");
        displayResultDiv.textContent = result;
        if (result.includes("You win!")) {
            playerScore += 1;
            document.querySelector("#playerScore").textContent = "Player Score: " + playerScore;
        } else if (result.includes("You lose!")) {
            computerScore += 1;
            document.querySelector("#computerScore").textContent = "Computer Score: " + computerScore;
        }
    });
});


function playGame() {
    
}

// playGame();