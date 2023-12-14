const playerScoreElement = document.querySelector('.player-score > .current-score');
const cpuScoreElement = document.querySelector('.cpu-score > .current-score');

const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        increment(checkWinner("rock", getComputerChoice()));
    })
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
        increment(checkWinner("paper", getComputerChoice()));
    })
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
        increment(checkWinner("scissors", getComputerChoice()));
    })


    
//Increments the score of the player who won. (1 - player, 0 - tie, -1 - cpu)
function increment(val){
    let newElement = document.createElement('p');
    switch (val) {
        case 1:
            newScore = 
            playerScoreElement.textContent = parseInt(playerScoreElement.textContent) + 1;
            newElement.textContent = 'Player won!';
            document.querySelector('body').appendChild(newElement);
            break;
        case -1:
            cpuScoreElement.textContent = parseInt(cpuScoreElement.textContent) + 1;
            newElement.textContent = 'CPU won!';
            document.querySelector('body').appendChild(newElement);
            break;
        case 0:
            newElement.textContent = 'It was a tie.';
            document.querySelector('body').appendChild(newElement);
            break;
        default:
            throw new Error('Invalid option. Only valid options are -1, 0, and 1');
    }

    if (parseInt(playerScoreElement.textContent) > 4){
        newElement.textContent = 'Player won five games and is the overall winner!';

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    if (parseInt(cpuScoreElement.textContent) > 4){
        newElement.textContent = 'CPU won five games and is the overall winner!';
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
}

function getComputerChoice(){
    switch (Math.floor(Math.random()*3)){
        case 2:
            return "rock";
        case 1:
            return "paper";
        case 0:
            return "scissors";
        default:
            throw new Error("There should only be three valid choices")
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
            throw new Error ("There shouldn\'t be any other input other than rock, paper, or scissors");
    }
}



/*

function game(rounds){
    let playerScore = 0;
    let cpuScore = 0;
    let winner;

    for(let i = 1; i <= rounds; i++){
        winner = checkWinner(prompt("Choose rock, paper, or scissors"),getComputerChoice());

        switch(winner){
            case 1:
                console.log("Player won round " + i)
                playerScore++;
                break;
            case -1:
                console.log("CPU won round " + i)
                cpuScore++;
                break;
            case 0:
                console.log("It was a tie for round " + i);
                break;
            default:
                throw new Error("Invalid case for rock paper scissors game");
        }
    }

    if(playerScore > cpuScore){
        console.log("Player won overall with " + playerScore + " wins!");
    } else if (playerScore < cpuScore){
        console.log("Computer won overall with " + cpuScore + " wins!");
    } else {
        console.log("It was a tie with a score of " + cpuScore + " each!");
    }
}

*/