function getComputerChoice(){
    switch (Math.floor(Math.random()*3)){
        case 2:
            return "rock";
        case 1:
            return "paper";
        case 0:
            return "scissors";
        default:
            throw new Error('There should only be three valid choices')
    }
}

function checkWinner(playerSelection, computerSelection){
    //-1 means player lost
    //+1 means player won
    // 0 means tie
    let _computerSelection = computerSelection.toLowerCase();
    let _playerSelection = playerSelection.toLowerCase();

    if (_playerSelection == _computerSelection) return 0; //Returns a tie if they're the same

    //At this point, there can only be a winner/loser
    switch (playerSelection.toLowerCase()){
        case "rock":
            return (_computerSelection == "paper") ? -1 : 1
        case "paper":
            return (_computerSelection == "scissors") ? -1 : 1
        case "scissors":
            return (_computerSelection == "rock") ? -1 : 1
        default:
            throw new Error ('There shouldn\'t be any other input other than "rock", "paper", or "scissors"');
    }
}