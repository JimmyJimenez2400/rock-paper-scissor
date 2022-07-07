const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
const playerSign = document.getElementById('playerSign');


rockBtn.addEventListener('click', function() {
    playerSign.textContent = '✊';
    playRound('rock', computerPlay());
});

paperBtn.addEventListener('click', function() {
    playerSign.textContent = '🖐';
    playRound('paper', computerPlay());
});

scissorBtn.addEventListener('click', function() {
    playerSign.textContent = '✌';
    playRound('scissor', computerPlay());
});


//Hand gestures as strings
const handGestures = ["rock", "paper", "scissor"];

//keep track of points and round number
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


//function that

function computerPlay() {
    let computerSign = document.getElementById('computerSign');
    let random = Math.floor((Math.random() * handGestures.length));
    var textChoice;
    switch(random){
        case 0:
            computerSign.textContent ='✊';
            textChoice = 'rock';
            break;
        case 1:
            computerSign.textContent ='🖐';
            textChoice ='paper';
            break;
        case 2:
            computerSign.textContent = '✌';
            textChoice = 'scissor';
            break;
    }
    return textChoice;
}

//function displays who the winner is after 5 rounds
function winnerAnnouncer() {
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


//function that will take two parameters. Inside is a if/else if/ else statement regarding who wins in the round.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie'
    }
    if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      playerScore++
      roundWinner = 'player'
    }
    if (
      (computerSelection === 'rock' && playerSelection === 'scissors') ||
      (computerSelection === 'scissors' && playerSelection === 'paper') ||
      (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
      computerScore++
      roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
  }
  

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}



//game function, that will start the game with 5 rounds. Keeps track of scores and round number. Tells user to input a string.
//function game() {
  //  alert('Game has started!');


    /* for(let i = 0; i < 5; i++) {
        alert(`Playing round ${roundNumber}...`)
        let userInput = prompt("Pick either one of these options: rock || paper || scissor")
        const computerPicks = computerPlay();
        console.log(playRound(userInput, computerPicks));
        alert(`Player score: ${playerScore}`);
        console.log(playerScore);
        alert(`Computer score: ${computerScore}`);
        console.log(computerScore);
        roundNumber += 1;
    } */
    
//}

//Call game function
//game();

//winnerAnnouncer called
//winnerAnnouncer();
