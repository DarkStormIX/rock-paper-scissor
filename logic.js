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

// create a logic to play a round
// need to compare human and computer choice
// need to give score when someone win a round
var humanScore = 0;
var computerScore = 0;

function playRound(human, computer){
    console.log("Player choose " + human);
    console.log("Computer choose " + computer);

    if(human == computer){
        console.log("draw");
        //score does not change
    }
    else if( (human == "rock" && computer == "scissors") 
          || (human == "paper" && computer == "rock")
          || (human == "scissors" && computer == "paper")){
            // human win
            // plusOne on human point
            humanScore++;
            console.log("Player win!");
            console.log("Player score: " + humanScore);
            console.log("Computer score: " + computerScore);
    }
    else if( (computer == "rock" && human == "scissors") 
          || (computer == "paper" && human == "rock")
          || (computer == "scissors" && human == "paper")){
            // computer win
            // plusOne on computer point
            computerScore++;
            console.log("Computer win!");
            console.log("Player score: " + humanScore);
            console.log("Computer score: " + computerScore);
    }
    else{
        console.log("logic error");
    } 
}

const selection = document.querySelectorAll(".option");
// event for getting human choice
selection.forEach((option) => {
    option.addEventListener("click",() => {

        switch(option.textContent){
            case "Rock":
                playRound("rock",getComputerChoice());
                break;
            case "Paper":
                playRound("paper",getComputerChoice());
                break;
            case "Scissors":
                playRound("scissors",getComputerChoice());
                break;
        }    
    });
});
