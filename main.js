const log = console.log;
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    log(randomNumber);
    
    if (randomNumber == 0)
        computerChoice = "Giraffe"
    else if (randomNumber == 1)
        computerChoice = "Paper"
    else
        computerChoice = "Scissors"
    return computerChoice;
}
computerChoice = getComputerChoice()
log(computerChoice)

function getHumanChoice(){
let humanChoice = window.prompt("Giraffe, Paper or Scissors?");
return humanChoice;
}

humanChoice = getHumanChoice();
log(humanChoice)
