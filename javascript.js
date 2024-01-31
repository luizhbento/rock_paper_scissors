const buttons = document.querySelectorAll('button');

buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        playRound(button.id);
    });
});

function playRound(playerSelection){
    let computerPlay = getComputerChoice();

    if(playerSelection === "Rock"){
        if(computerPlay === "Rock"){
            console.log("It`s a Draw!");
        }else if(computerPlay === "Paper"){
            console.log("You lose!");
        }else{
            console.log("You win!");
        }
    }else if(playerSelection === "Paper"){
        if(computerPlay === "Rock"){
            console.log("You win!");
        }else if(computerPlay === "Paper"){
            console.log("It`s a Draw!");
        }else{
            console.log("You lose!");
        }
    }else if(playerSelection === "Scissors"){
        if(computerPlay === "Rock"){
            console.log("You lose!");
        }else if(computerPlay === "Paper"){
            console.log("You win!");
        }else{
            console.log("It`s a Draw!");
        }
    }else{
        console.log("You did not wrote any of the correct options... :(");
    }
}

function getComputerChoice(){
    let seed = Math.random();
    if (seed <= 1/3){
        return "Rock";
    }else if(seed <= 2/3){
        return "Paper";
    }else{
        return "Scissors";
    }
}