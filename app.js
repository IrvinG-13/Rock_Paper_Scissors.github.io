const getComputerChoice = ()=> {
    let choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    if (choice == 1){
        return "Rock";

    }else if(choice == 2){
        return "Paper";

    }else if(choice == 3){

        return "Scissors";
    }  
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "Rock" && computerSelection == "Paper"){
        return "You Lose! Paper beats Rock";

    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You Lose! Scissors beats Paper";

    }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You Lose! Rock beats Scissors"

    }else if(playerSelection == "Rock" && computerSelection == "Rock"){
        return "Draw";

    }else if(playerSelection == "Paper" && computerSelection == "Paper"){
        return "Draw";

    }else if(playerSelection == "Scissors" && computerSelection == "Scissors"){
        return "Draw"

    }else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You Win! Rock beats Scissors";

    }else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You Win! Scissors beats Paper";
        
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return "You Win! Paper beats Rock";
        
    }
}


const playerSelection = prompt("Choose");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));