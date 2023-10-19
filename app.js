const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

let playerSelection; 

const Rock = document.getElementById('rock');
const Paper = document.getElementById('paper');
const Scissors = document.getElementById('scissors');
const resultElement = document.getElementById('result');

Rock.addEventListener('click', () => {
    playerSelection = "Rock";
    resolvePlayerSelection();
});

Paper.addEventListener('click', () => {
    playerSelection = "Paper";
    resolvePlayerSelection();
});

Scissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    resolvePlayerSelection();
});

function resolvePlayerSelection() {
    const computerSelection = getComputerChoice();
    const resultado = playRound(playerSelection, computerSelection);
    resultElement.textContent = resultado;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose!  Paper beats Rock ";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose!  Scissors beats Paper";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose!  Rock beats Scissors";
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return "Draw";
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return "Draw";
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return "Draw";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win!  Rock beats Scissors";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win!  Scissors beats Paper";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win!  Paper beats Rock";
    }
}






