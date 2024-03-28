// getComputerChoice = () => {
//   const options = ["rock", "paper", "scissor"];
//   const computerChoice = options[Math.floor(Math.random() * options.length)];
//   return computerChoice;
// };

// let players = [0, 0];

// getWinner = (playerSelection, computerSelection) => {
//   if (playerSelection == computerSelection) {
//     return -1;
//   } else if (playerSelection == "rock" && computerSelection == "scissor") {
//     return 0;
//   } else if (playerSelection == "paper" && computerSelection == "rock") {
//     return 0;
//   } else if (playerSelection == "scissor" && computerSelection == "paper") {
//     return 0;
//   } else {
//     return 1;
//   }
// };

// let player1Score = "";
// let player2Score = "";

// gameRound = () => {
//   let player2 = getComputerChoice();
//   console.log(`the computer chooses ${player2}`);
//   let selection = prompt("type a choice");
//   let player1 = selection.toLowerCase();
//   console.log(`you choose ${player1}`);
//   let winner = getWinner(player1, player2);

//   if (winner == -1) {
//     return "draw";
//   } else if (winner == 0) {
//     player1Score++;
//     return `you win ${player1} beats ${player2} , your score is ${player1Score}`;
//   } else {
//     player2Score++;
//     return `computer wins ${player2} beats ${player1} , computer score is ${player2Score}`;
//   }
// };

const buttonRock = document.querySelector("#buttonRock");
const buttonPaper = document.querySelector("#buttonPaper");
const buttonScissor = document.querySelector("#buttonScissor");
const para = document.querySelector("p");
const playerResultScore = document.querySelector("#playerResultScore");
const computerResultScore = document.querySelector("#computerResultScore");

getComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
};

playRound = (playerSelect, computerSelect) => {
  if (playerSelect == computerSelect) {
    return "draw";
  } else if (
    (playerSelect == "rock" && computerSelect == "scissor") ||
    (playerSelect == "paper" && computerSelect == "rock") ||
    (playerSelect == "scissor" && computerSelect == "paper")
  ) {
    return `you Won! ${playerSelect} beats ${computerSelect}`;
  } else {
    return `you Lose! ${computerSelect} beats ${playerSelect}`;
  }
};

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

playGame = (playerSelect) => {
  const computerSelect = getComputerChoice();
  console.log(`you chose ${playerSelect}`);
  console.log(`the computer chose ${computerSelect}`);

  const result = playRound(playerSelect, computerSelect);
  if (result.includes("Won")) {
    playerScore++;
    para.textContent = result;
    para.style.color = "#5dff6c";
  } else if (result.includes("Lose")) {
    computerScore++;
    para.textContent = result;
    para.style.color = "#ff1918";
  } else {
    para.textContent = result;
    para.style.color = "whitesmoke";
  }

  playerResultScore.textContent = playerScore;
  computerResultScore.textContent = computerScore;
  roundCount++;
  console.log(roundCount);

  if (playerScore >= 3 || computerScore >= 3 || roundCount >= 5) {
    if (playerScore > computerScore) {
      para.textContent = "you win";
      para.style.color = "#5dff6c";
    } else if (computerScore > playerScore) {
      para.textContent = "gaybot69 wins lol";
      para.style.color = "#ff1918";
    } else {
      para.textContent = "game ended in a draw";
      para.style.color = "whitesmoke";
    }

    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
  }
};

buttonRock.addEventListener("click", () => {
  playGame("rock");
});

buttonPaper.addEventListener("click", () => {
  playGame("paper");
});

buttonScissor.addEventListener("click", () => {
  playGame("scissor");
});
