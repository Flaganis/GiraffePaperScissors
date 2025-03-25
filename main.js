


      
      

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    
    if (randomNumber === 0)
        computerChoice = "Giraffe"
    else if (randomNumber === 1)
        computerChoice = "Paper"
    else
        computerChoice = "Scissors"
    return computerChoice;
    
    
    
}
computerChoice = getComputerChoice()
console.log (computerChoice)


