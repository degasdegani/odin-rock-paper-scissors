function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Rock, paper or scissors?");

  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const human = humanChoice.toLowerCase();

  if (human === computerChoice) {
    console.log("It's a tie! You both chose " + human);
  } else if (
    (human === "rock" && computerChoice === "scissors") ||
    (human === "paper" && computerChoice === "rock") ||
    (human === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! " + human + " beats " + computerChoice);
    humanScore = humanScore + 1;
  } else {
    console.log("You lose! " + computerChoice + " beats " + human);
    computerScore = computerScore + 1;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore, computerScore);
