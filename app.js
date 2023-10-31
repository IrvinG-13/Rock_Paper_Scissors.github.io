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

/*Rock > Scissors;
Rock < Paper;
Rock = Rock;

Paper > Rock;
Paper < Scissors;
Paper = Paper;

Scissors > Paper;
Scissors < Rock;
Scissors = Scissors*/

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


let contadorC= 0;
let contadorP = 0




function resolvePlayerSelection() {
    
    const computerSelection = getComputerChoice();
    const resultado = playRound(playerSelection, computerSelection);
    resultElement.textContent = resultado;

    let playerScore = document.getElementById('p-score');
    let computerScore = document.getElementById('c-score');

    if (playerSelection == "Rock" && computerSelection == "Paper") {
    contadorC++;
    computerScore.textContent = contadorC;
} else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    contadorC++;
    computerScore.textContent = contadorC;
} else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    contadorC++;
    computerScore.textContent = contadorC;
} else if (playerSelection == "Rock" && computerSelection == "Rock") {
    
} else if (playerSelection == "Paper" && computerSelection == "Paper") {
    
} else if (playerSelection == "Scissors" && computerSelection == "Scissors") {

} else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    contadorP++
    playerScore.textContent = contadorP;
} else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    contadorP++
    playerScore.textContent = contadorP;
} else if (playerSelection == "Paper" && computerSelection == "Rock") {
    contadorP++
    playerScore.textContent = contadorP;
}

if(contadorC === 5){
    playerScore.innerHTML = 0
    computerScore.innerHTML = 0
    contadorC = 0
    contadorP = 0
    resultElement.textContent = 'DEFEAT!';
}

if(contadorP === 5){
    playerScore.innerHTML = 0
    computerScore.innerHTML = 0
    contadorC = 0
    contadorP = 0
    resultElement.textContent = 'VICTORY!';
}
};




function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose!  Paper beats Rock";
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
};

function reload(){
    window.location.reload();
};

















