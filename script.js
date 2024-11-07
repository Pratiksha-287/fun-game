let player1Score = 0;
let player2Score = 0;
let gameMode = 'computer'; // Default mode
let playerChoice, computerChoice;


const player1NameElement = document.getElementById('player1Name');
const player2NameElement = document.getElementById('player2Name');
const player1ScoreElement = document.getElementById('player1Score');
const player2ScoreElement = document.getElementById('player2Score');

// Update score display function
function updateScoreDisplay() {

  player1ScoreElement.innerText = player1Score;
  player2ScoreElement.innerText = player2Score;
}

// Display choices for both modes
function displayChoices(player, opponent) {
  document.getElementById('playerChoice').innerText = player;
  document.getElementById('computerChoice').innerText = opponent;

}

// Handle the result logic
function handleResult(playerChoice, opponentChoice) {
  let result;

  if (playerChoice === opponentChoice) {
    result = "It's a Draw!";
  } else if (
    (playerChoice === 'stone' && opponentChoice === 'scissor') ||
    (playerChoice === 'scissor' && opponentChoice === 'paper') ||
    (playerChoice === 'paper' && opponentChoice === 'stone')
  ) {
    result = `${player1NameElement.innerText} Wins!`;
    player1Score++;
  } else {
    result = `${player2NameElement.innerText} Wins!`;
    player2Score++;
  }

  document.getElementById('gameResult').innerText = result;
  updateScoreDisplay();

  // Check for win condition and reset if a player reaches 3 points
  if (player1Score === 3 || player2Score === 3) {
    const winner = player1Score === 3 ? player1NameElement.innerText : player2NameElement.innerText;
    alert(`${winner} wins the game!`);
    player1Score = 0;
    player2Score = 0;

    updateScoreDisplay();

  }
}

// Play round function
function playRound(playerChoice) {
  if (gameMode === 'computer' || gameMode === 'friend') {
    const randomChoice = () => {
      const randomNumber = Math.random() * 3;
      return randomNumber <= 1 ? 'stone' : randomNumber <= 2 ? 'scissor' : 'paper';
    };

    const opponentChoice = randomChoice();

    displayChoices(playerChoice, opponentChoice);
    handleResult(playerChoice, opponentChoice);
  }
}

// Event listeners for game mode selection and buttons
document.getElementById('gameMode').addEventListener('change', function() {

  gameMode = this.value;

  if (gameMode === 'friend') {
    document.querySelector('.friend-mode').style.display = 'block';
    player1NameElement.innerText = document.getElementById('player1').value || 'Player 1';
    player2NameElement.innerText = document.getElementById('player2').value || 'Player 2';
  } else {
    document.querySelector('.friend-mode').style.display = 'none';
    player1NameElement.innerText = 'Player';
    player2NameElement.innerText = 'Computer';
  }

});

// Event listener for "Start Game" button in friend mode
document.getElementById('startFriendGame').addEventListener('click', function() {
  if (gameMode === 'friend') {
    const player1Name = document.getElementById('player1').value || 'Player 1';
    const player2Name = document.getElementById('player2').value || 'Player 2';
    player1NameElement.innerText = player1Name;
    player2NameElement.innerText = player2Name;

    // Hide input fields and start button
    document.querySelector('.friend-mode').style.display = 'none';

    // Reset scores and update display
    player1Score = 0;
    player2Score = 0;

    updateScoreDisplay();
  }
});

document.getElementById('stoneBtn').addEventListener('click', () => playRound('stone'));

document.getElementById('scissorBtn').addEventListener('click', () => playRound('scissor'));

document.getElementById('paperBtn').addEventListener('click', () => playRound('paper'));

// Update player names on input change
document.getElementById('player1').addEventListener('input', () => {
  player1NameElement.innerText = document.getElementById('player1').value || 'Player 1';
});
document.getElementById('player2').addEventListener('input', () => {
  player2NameElement.innerText = document.getElementById('player2').value || 'Player 2';
});
 

//restart game 

document.getElementById('restartGame').addEventListener('click', function() {
  player1Score = 0;
  player2Score = 0;

  updateScoreDisplay();
  
  document.getElementById('gameResult').innerText = '';
  alert("Game has been restarted!");
});
