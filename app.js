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

playGame = () => {
  let playerScore = "";
  let computerScore = "";

  for (let i = 0; i < 5; i++) {
    const playerSelect = prompt("type your choice");
    const computerSelect = getComputerChoice();
    console.log(`you chose ${playerSelect}`);
    console.log(`the computer chose ${computerSelect}`);

    const result = playRound(playerSelect, computerSelect);
    console.log(result);
    if (result.includes("Won")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    } else {
    }
  }

  return `your score: ${playerScore}
    computer score: ${computerScore}`;
};

let game = playGame();
console.log(game);
