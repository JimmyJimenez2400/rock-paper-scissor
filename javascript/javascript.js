const handGestures = ["rock", "paper", "scissor"];

let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;




function computerPlay() {
    
    var random = Math.floor((Math.random() * handGestures.length));
    var randomGesture = handGestures[random];

    return randomGesture;
}


function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection) {
        alert("IT'S A TIE");
    }
    else if((computerSelection == "rock" && playerSelection == "scissor") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissor" && playerSelection == "paper")) {
        alert(`You lose! ${computerSelection} beats ${playerSelection}!`)
        computerScore++;
    }
    else if((playerSelection == "rock" && computerSelection == "scissor") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissor" && computerSelection == "paper")) {
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    }
    else {
        alert("Not a valid input");
    }
}


function game() {
    alert('Game has started!');
    for(let i = 0; i < 5; i++) {
        alert(`Playing round ${roundNumber}...`)
        let userInput = prompt("Pick either one of these options: rock || paper || scissor")
        const computerPicks = computerPlay();
        console.log(playRound(userInput, computerPicks));
        alert(`Player score: ${playerScore}`);
        console.log(playerScore);
        alert(`Computer score: ${computerScore}`);
        console.log(computerScore);
        roundNumber += 1;
    }
    if (computerScore == playerScore){
        alert("IT IS A TIE FROM BOTH CONTESTANTS!!!");
    }
    else if(computerScore > playerScore) {
        alert("COMPUTER WINS!!!");
    }
    else {
        alert("PLAYER WINS!!!")
    }
}

game();
