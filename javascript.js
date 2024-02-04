const buttons = document.querySelectorAll("button");

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const humanH4 = document.querySelector("#human_score");
const computerH4 = document.querySelector("#computer_score");
humanH4.textContent = humanScore;
computerH4.textContent = computerScore;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    roundCount++;
    if (roundCount === 1) {
      const results = document.querySelector("#results");
      const resultsTitle = document.createElement("h4");
      const resultsHr = document.createElement("hr");
      resultsTitle.textContent = "Results:";
      results.appendChild(resultsHr);
      results.appendChild(resultsTitle);
    }

    if (humanScore < 5 && computerScore < 5) {
      const content = document.createElement("div");
      const contentText = document.createTextNode(playRound(button.id));
      const boldRound = document.createElement("b");
      boldRound.textContent = "Round " + roundCount + " : ";
      content.appendChild(boldRound);
      content.appendChild(contentText);
      results.appendChild(content);
    } else {
    }

    if (humanScore === 5 || computerScore === 5) {
      const boldResult = document.createElement("b");
      const lineBreak = document.createElement("br");
      if (humanScore === 5) {
        boldResult.textContent = "Game Over! You Won! Congrats!";
      } else {
        boldResult.textContent = "Game Over! You Lose! Try Again Later!";
      }
      results.appendChild(lineBreak);
      results.appendChild(boldResult);

      const buttonsEnd = document.querySelectorAll("button");
      buttonsEnd.forEach((buttonEnd) => {
        buttonEnd.disabled = true;
      });
    }

    humanH4.textContent = humanScore;
    computerH4.textContent = computerScore;
  });
});

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      return (
        resultsDisplay(playerSelection, computerSelection) + ". It`s a Draw!"
      );
    } else if (computerSelection === "Paper") {
      computerScore++;
      return resultsDisplay(playerSelection, computerSelection) + ". You lose!";
    } else {
      humanScore++;
      return resultsDisplay(playerSelection, computerSelection) + ". You win!";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      humanScore++;
      return resultsDisplay(playerSelection, computerSelection) + ". You win!";
    } else if (computerSelection === "Paper") {
      return (
        resultsDisplay(playerSelection, computerSelection) + ". It`s a Draw!"
      );
    } else {
      computerScore++;
      return resultsDisplay(playerSelection, computerSelection) + ". You lose!";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      computerScore++;
      return resultsDisplay(playerSelection, computerSelection) + ". You lose!";
    } else if (computerSelection === "Paper") {
      humanScore++;
      return resultsDisplay(playerSelection, computerSelection) + ". You win!";
    } else {
      return (
        resultsDisplay(playerSelection, computerSelection) + ". It`s a Draw!"
      );
    }
  }
}

const resultsDisplay = (playerSelection, computerSelection) => {
  return (
    "You chose " + playerSelection + ", Computer chose " + computerSelection
  );
};

function getComputerChoice() {
  let seed = Math.random();
  if (seed <= 1 / 3) {
    return "Rock";
  } else if (seed <= 2 / 3) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
