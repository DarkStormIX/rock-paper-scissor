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

const result = document.querySelector(".result");

const playerChoiceText = document.createElement("p");
const computerChoiceText = document.createElement("p");
const resultText = document.createElement("p");
const playerScoreText = document.createElement("p");
const computerScoreText = document.createElement("p");
const finalResultText = document.createElement("p");


result.appendChild(playerChoiceText);
result.appendChild(computerChoiceText);
result.appendChild(resultText);
result.appendChild(playerScoreText);
result.appendChild(computerScoreText);
result.appendChild(finalResultText);

function playRound(human, computer){

    playerChoiceText.textContent = "Player choose : " + human;
    computerChoiceText.textContent = "Computer choose : " + computer;

    if(human == computer){
        resultText.textContent = "Result : Draw."; 
        //score does not change
    }
    else if( (human == "rock" && computer == "scissors") 
          || (human == "paper" && computer == "rock")
          || (human == "scissors" && computer == "paper")){
            // human win
            // plusOne on human point
            humanScore++;
            resultText.textContent = "Result : Player wins the round!";
            playerScoreText.textContent = "Player Score : " + humanScore;
            computerScoreText.textContent = "Computer Score : " + computerScore; 
    }
    else if( (computer == "rock" && human == "scissors") 
          || (computer == "paper" && human == "rock")
          || (computer == "scissors" && human == "paper")){
            // computer win
            // plusOne on computer point
            computerScore++;
            resultText.textContent = "Result : Computer wins the round!";
            playerScoreText.textContent = "Player Score : " + humanScore;
            computerScoreText.textContent = "Computer Score : " + computerScore; 
    }
    else{
        console.log("logic error");
    } 

    // the first one to win 5 rounds wins the game
    if(humanScore == 5){
        finalResultText.textContent = "Player wins the game!";
    }
    else if(computerScore == 5){
        finalResultText.textContent = "Computer wins the game!";
    }
    else
    {
        finalResultText.textContent = "Continue playing.";
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