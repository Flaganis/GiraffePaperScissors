const log = console.log;

function getComputerChoice(){
    let randomNumber = Math.round(Math.random() * 2);
    log(randomNumber);
    
    if (randomNumber == 0)
         return "giraffe"
    else if (randomNumber == 1)
        return "paper"
    else
        return "scissors"
    
}



function getHumanChoice(){
    let humanChoice = window.prompt("Giraffe, Paper or Scissors?");
    return humanChoice.toLowerCase();
    
}



function playGame(){
    
    let humanScore = 0;
    let computerScore =0;
    function playRound(humanChoice, computerChoice) {
        
        log(humanChoice,computerChoice)
        if (humanChoice === computerChoice)
            return log("Round draw🤝")
        else if(humanChoice=="giraffe" && computerChoice=="paper"){
            computerScore++;
            return log("You lose, Paper wraps Giraffe")
        }
        else if(humanChoice=="paper" && computerChoice=="scissors"){
            computerScore++;
            return log("You lose, Scissors slices Paper")
        }
        else if(humanChoice=="scissors" && computerChoice=="giraffe"){
            computerScore++;
            return log("You lose, Giraff eats Scissors")
        }
        else {
            humanScore++;
            return log("You win, "+humanChoice+" beats "+computerChoice)
        }
    }  
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
    log("Computer score is "+computerScore)
    log("Your score is "+humanScore)

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
    log("Computer score is "+computerScore)
    log("Your score is "+humanScore)

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
    log("Computer score is "+computerScore)
    log("Your score is "+humanScore)
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
    log("Computer score is "+computerScore)
    log("Your score is "+humanScore)
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection)
    log("Computer score is "+computerScore)
    log("Your score is "+humanScore)
    

}
playGame()
