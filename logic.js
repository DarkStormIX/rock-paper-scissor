function getComputerChoice(){
    let type = Math.floor(Math.random() * (Math.floor(3) - Math.ceil(1) + 1) + Math.ceil(1));
    switch(type){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
        default:
            return "Error";
    }
}

console.log("Computer choose " + getComputerChoice())
