// create a function for computer to choose one option
function getComputerChoice(){
    var computerChoice = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1) + Math.ceil(1));
    switch(computerChoice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "error";
    }
}

console.log("Computer choose " + getComputerChoice());

// create a function for player to choose one option
function getHumanChoice(){
    var humanChoice = prompt("Choose between rock, paper or scissors.");
    var humanChoice = humanChoice.toLowerCase();

    switch(humanChoice){
        case "rock":
            return humanChoice;
        case "paper":
            return humanChoice;
        case "scissors":
            return humanChoice;
        default:
            return "not available";
    }
}

console.log("Player choose " + getHumanChoice());

