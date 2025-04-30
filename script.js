

console.log("Hello World");

let humanScore = 0

let computerScore = 0

let roundWinner = ''

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            console.log("Rock");
            return "Rock"
        case 1:
            console.log("Paper");
            return "Paper"
        case 2:
            console.log("Scissors");
            return "Scissors"
    }
}

function getHumanChoice(){
    let HChoice = prompt("Choose Rock,Paper or Scissors");

    switch (HChoice){
        case 'rock':
            console.log("Rock");
            return "Rock"
            
        case 'paper':
            console.log("Paper");
            return "Paper"
        case 'scissors':
            console.log("Scissors");
            return "Scissors"
    }
}

function playRound(HChoice,CChoice){
    if (HChoice === CChoice) {
        roundWinner = 'tie'
    }

    if (
        (CChoice === 'Rock' && HChoice === 'Scissors') ||
        (CChoice === 'Scissors' && HChoice === 'Paper') ||
        (CChoice === 'Paper' && HChoice === 'Rock')
    )
    {
        computerScore++
        roundWinner = 'Computer'
        console.log('You lost!')
    }

    if (
        (HChoice === 'Rock' && CChoice === 'Scissors') ||
        (HChoice === 'Scissors' && CChoice === 'Paper') ||
        (HChoice === 'Paper' && CChoice === 'Rock')
    )
    {
        humanScore++
        roundWinner = 'Player'
        console.log('You won!')
    }
}

const CChoice = getComputerChoice();
const HChoice = getHumanChoice();

playRound(HChoice,CChoice);