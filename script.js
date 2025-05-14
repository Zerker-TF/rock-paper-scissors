

console.log("Hello lets play!");
console.log("First to earn 5 points wins the game!")
//GAME LOGIC

function playGame(Hchoice){
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
    
    function getHumanChoice(HChoice){
       
    
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

    document.querySelectorAll('img[role="button"]').forEach(button => {
        button.addEventListener('click',(event) => {
            const HChoice = event.target.dataset.choice;
            const result = getHumanChoice(Hchoice);
        })
    } );
    if(humanScore === 5){
        console.log("Congratulations! You won!")
    }
    if(computerScore===5){
        console.log("Too bad! You lost!")
    }


}


playGame();