const buttons = document.querySelectorAll("button");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (humanScore + computerScore === 0) {
      const results = document.querySelector("#results");
      const content = document.createElement("h4");
    }

    if (humanScore <     5 && computerScore < 5) {
      content = document.createElement("div");
      content.classList.add("result");
      content.textContent = playRound(button.id);
      results.appendChild(content);
    } else {
    }
  });
});

function playRound(playerSelection) {
  let computerPlay = getComputerChoice();

  if (playerSelection === "Rock") {
    if (computerPlay === "Rock") {
      return "It`s a Draw!";
    } else if (computerPlay === "Paper") {
      return "You lose!";
    } else {
      return "You win!";
    }
  } else if (playerSelection === "Paper") {
    if (computerPlay === "Rock") {
      return "You win!";
    } else if (computerPlay === "Paper") {
      return "It`s a Draw!";
    } else {
      return "You lose!";
    }
  } else if (playerSelection === "Scissors") {
    if (computerPlay === "Rock") {
      return "You lose!";
    } else if (computerPlay === "Paper") {
      return "You win!";
    } else {
      return "It`s a Draw!";
    }
  } else {
    return "You did not wrote any of the correct options... :(";
  }
}

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
