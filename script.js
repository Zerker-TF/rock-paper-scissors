

console.log("Hello World");

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            console.log("Rock");
            break
        case 1:
            console.log("Paper");
            break
        case 2:
            console.log("Scissors");
            break
        default:
            console.log("Invalid choice");
            break
    }
}

function getHumanChoice(){
    let HChoice = prompt("Choose Rock,Paper or Scissors");

    switch (HChoice){
        case 'rock':
            console.log("Rock");
            break
        case 'paper':
            console.log("Paper");
            break
        case 'scissors':
            console.log("Scissors");
            break
    }
}

getComputerChoice();
getHumanChoice();