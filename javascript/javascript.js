const handGes = document.querySelectorAll('.handGes');
const playerSign = document.getElementById('playerSign');
const rounds = document.querySelector('.rounds');
const winnerGesture = document.getElementsByClassName('winnerGesture');
const computerScore = document.getElementById('computerScore');
const playerScore = document.getElementById('playerScore');



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
let currRound = 1;
let player_score = 0;
let computer_score = 0;





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
    rounds.textContent = `Round: ${currRound}`;

    return currRound;
}

// function endGame(){
//     if(playerLives > 0 && computerLives < 0){
//          modal.textContent = `YOU HAVE WON AGAINST ALL ODDS!!!`
//     }
// }


function scoreTracker(){
    playerScore.textContent = `Player: ${player_score}`;
    computerScore.textContent = `Computer: ${computer_score}`;

    return [playerScore, computerScore];
}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        winnerGesture.innerText = `It's a tie!!!`;
        currRound += 1;
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')){

        winnerGesture.textContent = `${playerSelection} BEATS ${computerSelection}`;
        computerLives -= 1;
        currRound += 1;
        player_score +=1;
        
    }
    else if((computerSelection === 'rock' && playerSelection === 'scissor') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissor' && playerSelection === 'paper')){
        winnerGesture.textContent = `${computerSelection} BEATS ${playerSelection}!!!`;
        playerLives -= 1;
        currRound += 1;
        computer_score +=1;
        
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
            
            playRound(playerSelection, computerPlay());
            scoreTracker();
            roundTracker();
            
            //endGameResults();
        })
    })
}


function flCapital(str) {
    if (!str) return;
    return str.match("^[a-z]") ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}

game();