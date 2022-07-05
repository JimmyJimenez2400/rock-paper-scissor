//Selectors



//


//Hand gestures as strings
const handGestures = ["rock", "paper", "scissor"];

//keep track of points and round number
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;



//Function that will randomly pick from the array from handGestures, Math.floor will make sure its a whole number. 
//Math.random will make sure its a floating point number and pick between inclusive 0 but not 1.
//Multiply with the length of handGestures which is 3.
//handGestures will reference the array from random, which picks from (0 to 2), stored in randomGesture var
//Returns randomGesture
function computerPlay() {
    
    let random = Math.floor((Math.random() * handGestures.length));
    let randomGesture = handGestures[random];

    return randomGesture;
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

//game function, that will start the game with 5 rounds. Keeps track of scores and round number. Tells user to input a string.
function game() {
    alert('Game has started!');


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
    
}

//Call game function
//game();

//winnerAnnouncer called
//winnerAnnouncer();
