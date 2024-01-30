let computerPlay = getComputerChoice();
let humanPlay = prompt("Rock, Paper or Scissors?");

console.log("You chose "+humanPlay);
console.log("Computer chose "+computerPlay);

humanPlay = humanPlay.toUpperCase();

if(humanPlay === "ROCK"){
    if(computerPlay === "Rock"){
        //console.log("You win!");
        //console.log("You lose!");
        console.log("It`s a Draw!");
    }else if(computerPlay === "Paper"){
        //console.log("You win!");
        console.log("You lose!");
        //console.log("It`s a Draw!");
    }else{
        console.log("You win!");
        //console.log("You lose!");
        //console.log("It`s a Draw!");
    }
}else if(humanPlay === "PAPER"){
    if(computerPlay === "Rock"){
        console.log("You win!");
        //console.log("You lose!");
        //console.log("It`s a Draw!");
    }else if(computerPlay === "Paper"){
        //console.log("You win!");
        //console.log("You lose!");
        console.log("It`s a Draw!");
    }else{
        //console.log("You win!");
        console.log("You lose!");
        //console.log("It`s a Draw!");
    }
}else if(humanPlay === "SCISSORS"){
    if(computerPlay === "Rock"){
        //console.log("You win!");
        console.log("You lose!");
        //console.log("It`s a Draw!");
    }else if(computerPlay === "Paper"){
        console.log("You win!");
        //console.log("You lose!");
        //console.log("It`s a Draw!");
    }else{
        //console.log("You win!");
        //console.log("You lose!");
        console.log("It`s a Draw!");
    }
}else{
    console.log("You did not wrote any of the correct options... :(");
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