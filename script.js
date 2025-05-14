document.addEventListener("DOMContentLoaded", () => {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;



    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        console.log("Computadora:", choices[randomIndex]);
        return choices[randomIndex];
    }

    function getHumanChoice(choice) {
        const formattedChoice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
        console.log("Jugador:", formattedChoice);
        return formattedChoice;
    }


    // Función para abrir el popup y mostrar las imágenes
    function openPopupWithImage(humanChoice, computerChoice, humanImg, computerImg) {
        // Dimensiones de la ventana
        const width = 600;
        const height = 600;

        // Obtener las dimensiones de la pantalla
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Calcular la posición del popup para centrarlo
        const left = (screenWidth - width) / 2;
        const top = (screenHeight - height) / 2;
        
        // Abrir la ventana emergente (popup) con las dimensiones y posición calculadas
        const popup = window.open("", "popupWindow", `width=${width},height=${height},left=${left},top=${top}`);
        
        if (popup) {
            const result = determineWinner(humanChoice, computerChoice);
            const winnerImage = result.winner === "Jugador" ? humanImg : computerImg;


            // Generamos el contenido del popup
            popup.document.write(`
                <html>
                    <head><title>Resultado de la Ronda</title></head>
                    <body style="margin:0; display:flex; flex-direction:column; justify-content:center; align-items:center; background-color:#f4f4f4; height:100vh;">
                        <div style="display:flex; align-items:center; justify-content:space-between; width:80%; padding:20px;">
                            <img src="${humanImg}" alt="Imagen Jugador" style="max-width:30%; max-height:200px;"/>
                            <img src="./img/vs-icon.png" alt="vs" style="max-width:15%; max-height:100px;"/>
                            <img src="${computerImg}" alt="Imagen Computadora" style="max-width:30%; max-height:200px;"/>
                        </div>
                        <div style="margin-top:20px; font-size:24px; font-weight:bold;">
                            <p>Winner: ${result.winner}</p>
                            <img src="${winnerImage}" alt="Imagen Ganador" style="display:flex; justify-content:center; align-items:center;max-width:150px; max-height:150px;"/>
                            <p style="font-size:18px;">${result.winner} wins with ${result.winnerChoice}</p>
                        </div>
                    </body>
                </html>
            `);
            popup.document.close(); // Cierra el stream de escritura
        } else {
            alert("Popup bloqueado por el navegador.");
        }

        if (result.winner === "Human") {
            humanScore++;
            console.log(humanScore);
        } else if (result.winner === "Computer") {
            computerScore++;
            console.log(computerScore);
        }

        if (humanScore === 5 || computerScore === 5) {
            const winnerMessage = humanScore === 5 ? "¡Felicidades! ¡Ganaste!" : "¡Lo siento! ¡Perdiste!";
            const winnerImage = humanScore === 5 ? humanImg : computerImg;
        } 
    }

    // Lógica para determinar al ganador de la ronda
    function determineWinner(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return { winner: "No one", winnerChoice: "Tie" };
        }
        
        // Lógica de comparación para determinar el ganador
        const outcomes = {
            "rock": { "scissors": "Human", "paper": "Computer", "rock": "Ninguno" },
            "paper": { "rock": "Human", "scissors": "Computer", "paper": "Ninguno" },
            "scissors": { "paper": "Human", "rock": "Computer", "scissors": "Ninguno" }
        };

        const winner = outcomes[humanChoice][computerChoice];
        return { winner, winnerChoice: winner === "Human" ? humanChoice : computerChoice };

        


    }

    // Agrega los listeners a las imágenes
    document.querySelectorAll('img[role="button"]').forEach(button => {
        button.addEventListener('click', (event) => {
            const humanChoice = event.target.dataset.choice;
            const humanImg = event.target.src;
            const computerChoice = getComputerChoice();
            
            // Imagenes para la computadora
            const computerImg = document.querySelector(`img[data-choice="${computerChoice.toLowerCase()}"]`).src;

            // Abrir el popup con las imágenes y el resultado
            openPopupWithImage(humanChoice, computerChoice, humanImg, computerImg);
        });
    });

});
