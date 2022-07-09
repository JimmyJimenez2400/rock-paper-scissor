const handGes = document.querySelectorAll('.handGes');
const playerSign = document.getElementById('playerSign');
const rounds = document.getElementsByClassName('rounds');
const winnerGesture = document.getElementsByClassName('winnerGesture');



// rockBtn.addEventListener('click', function() {
//     playerSign.textContent = '✊';
//     playRound('rock', computerPlay());
    
// });

// paperBtn.addEventListener('click', function() {
//     playerSign.textContent = '🖐';
//     playRound('paper', computerPlay());
    
// });

// scissorBtn.addEventListener('click', function() {
//     playerSign.textContent = '✌';
//     playRound('scissor', computerPlay());
// });



//keep track of points and round number
let playerLives = 5;
let computerLives = 5;
let round = 0;




//Functions
function computerPlay(){
    let computerSign = document.getElementById('computerSign')
    const handGestures = ['rock', 'paper', 'scissor'];
    const randomChoice = handGestures[Math.floor(Math.random() * handGestures.length)];

    if(randomChoice === 'rock'){
        computerSign.textContent = '✊';
    }
    else if(randomChoice === 'paper'){
        computerSign.textContent = '🖐';
    }
    else if(randomChoice === 'scissor'){
        computerSign.textContent = '✌';
    }

    return randomChoice;
    
}

function roundTracker() {
    round +=1;
    rounds.innerText = `Round ${round}`;
    return rounds;
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        winnerGesture.innerText = `It's a tie!!!`;
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')){

        winnerGesture.textContent = `${playerSelection} BEATS ${computerSelection}`;
        computerLives -= 1;
    }
    else if((computerSelection === 'rock' && playerSelection === 'scissor') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissor' && playerSelection === 'paper')){
        winnerGesture.textContent = `${computerSelection} BEATS ${playerSelection}!!!`;
        playerLives -= 1;
    }

    const lives = document.querySelector('.lives');
    lives.innerText = `Player Lives: ${playerLives} | Computer Lives: ${computerLives}`;
    return [playerLives, computerLives];
}

function game() {
    let playerSelection;
    handGes.forEach((gesture) => {
        gesture.addEventListener('click', () => {
            if(gesture.classList.contains('rockBtn')){
                playerSign.textContent = '✊';
                playerSelection ='rock';
            }  
            else if(gesture.classList.contains('paperBtn')){
                playerSign.textContent = '🖐';
                playerSelection = 'paper'
            }else {
                playerSelection ='scissor';
                playerSign.textContent = '✌';
            }      
            roundTracker();
            playRound(playerSelection, computerPlay());
        })
    })
}


function flCapital(str) {
    if (!str) return;
    return str.match("^[a-z]") ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}

game();