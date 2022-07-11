//UI

const handGes = document.querySelectorAll('.handGes');
const playerSign = document.getElementById('playerSign');
const rounds = document.querySelector('.rounds');
const computerScore = document.getElementById('computerScore');
const playerScore = document.getElementById('playerScore');
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn')




//Event Listeners
overlay.addEventListener('click', closeEndGameModal);
restartBtn.addEventListener('click', restartGame);



//keep track of points and round number
let playerLives = 5;
let computerLives = 5;
let currRound = 1;
let player_score = 0;
let computer_score = 0;





//Functions
function computerPlay(){
    let computerSign = document.getElementById('computerSign');
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



function scoreTracker(){
    playerScore.textContent = `Player: ${player_score}`;
    computerScore.textContent = `Computer: ${computer_score}`;

    return [playerScore, computerScore];
}


function playRound(playerSelection, computerSelection){
    const winRoundAnnouncer = document.querySelector('.winnerGesture');
    const roundWinner = document.querySelector('.roundWinner');

    if(playerSelection === computerSelection){
        roundWinner.textContent = `It's a tie!!!`;
        currRound += 1;
        winRoundAnnouncer.textContent = "THE ROUND ENDED WITH A DRAW!"
    }
    else if((playerSelection === 'rock' && computerSelection === 'scissor') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissor' && computerSelection === 'paper')){

        roundWinner.textContent = `${playerSelection} BEATS ${computerSelection}`;
        winRoundAnnouncer.textContent = "YOU WIN THIS ROUND! LETS GO!!!";
        computerLives -= 1;
        currRound += 1;
        player_score +=1;
        
    }
    else if((computerSelection === 'rock' && playerSelection === 'scissor') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissor' && playerSelection === 'paper')){
        roundWinner.textContent = `${computerSelection} BEATS ${playerSelection}!!!`;
        playerLives -= 1;
        currRound += 1;
        computer_score +=1;
        winRoundAnnouncer.textContent = 'THE COMPUTER HAS WON THIS ROUND! DO BETTER!';
        
    }

    const lives = document.querySelector('.lives');
    lives.innerText = `Player Lives: ${playerLives} | Computer Lives: ${computerLives}`;
    return [playerLives, computerLives];

}

function game() {
    let playerSelection;
    handGes.forEach((gesture) => {
        gesture.addEventListener('click', () => {


            if (isGameOver()) {
                openEndgameModal()
                return
              }
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

            if(isGameOver()){
                openEndGameModal();
                setFinalMessage();
            }



        })
    })
}


function flCapital(str) {
    if (!str) return;
    return str.match("^[a-z]") ? str.charAt(0).toUpperCase() + str.substring(1) : str;
}

function isGameOver(){
    return player_score === 5 || computer_score === 5;
}

function openEndGameModal(){
    endgameModal.classList.add('active');
    overlay.classList.add('active');
}

function closeEndGameModal(){
    endgameModal.classList.remove('active');
    overlay.classList.add('active');
}

function setFinalMessage(){
    return player_score > computer_score ? (endgameMsg.textContent ='You won!') : (endgameMsg.textContent = 'You lost...');
}

function restartGame() {
    window.location.reload();
    return false;
  }


game();