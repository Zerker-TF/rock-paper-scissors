

console.log("Hello lets play!");
console.log("First to earn 5 points wins the game!")
//GAME LOGIC

function playGame(){
    let humanScore = 0
    
    let computerScore = 0
    
    let roundWinner = ''
    
    let round = 1
    
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

    // while (humanScore < 5 && computerScore < 5){

    //     function playRound(HChoice,CChoice){
    //         if (HChoice === CChoice) {
    //             roundWinner = 'tie'
    //         }
        
    //         if (
    //             (CChoice === 'Rock' && HChoice === 'Scissors') ||
    //             (CChoice === 'Scissors' && HChoice === 'Paper') ||
    //             (CChoice === 'Paper' && HChoice === 'Rock')
    //         )
    //         {
    //             computerScore++
    //             round++
    //             roundWinner = 'Computer'
    //             console.log('You lost!')
    //         }
        
    //         if (
    //             (HChoice === 'Rock' && CChoice === 'Scissors') ||
    //             (HChoice === 'Scissors' && CChoice === 'Paper') ||
    //             (HChoice === 'Paper' && CChoice === 'Rock')
    //         )
    //         {
    //             humanScore++
    //             round++
    //             roundWinner = 'Player'
    //             console.log('You won!')
    //         }
    //     }

    //     function UpdateScore(computerScore,humanScore,round){
    //         console.log("=====ROUND",round,"====")
    //         console.log("=====SCORE=====")
    //         console.log("Player: ",humanScore)
    //         console.log("Computer: ",computerScore)
    //     }
        
    //     const CChoice = getComputerChoice();
    //     const HChoice = getHumanChoice();
        
    //     playRound(HChoice,CChoice);
    //     UpdateScore(computerScore,humanScore,round)
    // }

    if(humanScore === 5){
        console.log("Congratulations! You won!")
    }
    if(computerScore===5){
        console.log("Too bad! You lost!")
    }

}
playGame();