document.addEventListener("DOMContentLoaded", () => {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    let resultPopup;

    // DOM
    const roundDisplay = document.getElementById("round");
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");

    // Initialize or reopen popup
    function openPopup() {
        const width = 600;
        const height = 600;
        const left = (window.screen.width - width) / 2;
        const top = (window.screen.height - height) / 2;

        if (!resultPopup || resultPopup.closed) {
            resultPopup = window.open("", "popupWindow", `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars=no`);
        } else {
            resultPopup.focus();
        }

        if (resultPopup) {
            resultPopup.document.write(`<html><head><title>Resultado de la Ronda</title></head><body style='margin:0; display:flex; flex-direction:column; justify-content:center; align-items:center; background-color:#f4f4f4; height:100vh;'></body></html>`);
            resultPopup.document.close();
        }
    }

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function updatePopup(humanChoice, computerChoice, humanImg, computerImg, result) {
        openPopup();
        if (resultPopup) {
            const winnerImage = result.winner === "Human" ? humanImg : computerImg;
            resultPopup.document.body.innerHTML = `
                <div style="display:flex; align-items:center; justify-content:space-between; width:80%; padding:20px;">
                    <img src="${humanImg}" alt="Imagen Jugador" style="max-width:30%; max-height:200px;"/>
                    <img src="./img/vs-icon.png" alt="vs" style="max-width:15%; max-height:100px;"/>
                    <img src="${computerImg}" alt="Imagen Computadora" style="max-width:30%; max-height:200px;"/>
                </div>
                <div style="margin-top:20px; font-size:24px; font-weight:bold;">
                    <p>Winner: ${result.winner}</p>
                    <img src="${winnerImage}" alt="Imagen Ganador" style="max-width:150px; max-height:150px;"/>
                    <p style="font-size:18px;">${result.winner} wins with ${result.winnerChoice}</p>
                </div>
            `;
            resultPopup.focus();
        }
    }

    function determineWinner(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) return { winner: "No one", winnerChoice: "Tie" };
        const outcomes = { "rock": { "scissors": "Human", "paper": "Computer" }, "paper": { "rock": "Human", "scissors": "Computer" }, "scissors": { "paper": "Human", "rock": "Computer" } };
        const winner = outcomes[humanChoice][computerChoice];
        return { winner, winnerChoice: winner === "Human" ? humanChoice : computerChoice };
    }

    function playRound(humanChoice, humanImg) {
        const computerChoice = getComputerChoice();
        const computerImg = document.querySelector(`img[data-choice='${computerChoice.toLowerCase()}']`).src;
        const result = determineWinner(humanChoice, computerChoice);

        if (result.winner === "Human") humanScore += 1;
        else if (result.winner === "Computer") computerScore += 1;

        playerScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        roundDisplay.textContent = round++;

        updatePopup(humanChoice, computerChoice, humanImg, computerImg, result);

        if (humanScore === 5 || computerScore === 5) {
            setTimeout(() => {
                alert(humanScore === 5 ? "¡Felicidades! ¡Ganaste!" : "¡Lo siento! ¡Perdiste!");
                resetGame();
            }, 200);
        }
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        round = 1;
        playerScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        roundDisplay.textContent = round;
        if (resultPopup && !resultPopup.closed) resultPopup.close();
    }

    document.querySelectorAll('img[role="button"]').forEach(button => {
        button.addEventListener('click', (event) => {
            const humanChoice = event.target.dataset.choice;
            const humanImg = event.target.src;
            playRound(humanChoice, humanImg);
        });
    });

    window.onbeforeunload = () => { if (resultPopup) resultPopup.close(); }
});
