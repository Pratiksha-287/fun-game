
let count = 0;  
let computerChoice;  
let playerChoice; 

// Update score function
function updateScore() {
  document.getElementById('score').innerText = count;
}

// Display choices
function displayChoices(player, computer) {
  document.getElementById('playerChoice').innerText = player;
  document.getElementById('computerChoice').innerText = computer;
}

// Handle the result
function handleResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    document.getElementById('gameResult').innerText = 'It\'s a Draw!';
  } else if (
    (playerChoice === 'stone' && computerChoice === 'scissor') ||
    (playerChoice === 'scissor' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'stone')
  ) {
    count++;
    document.getElementById('gameResult').innerText = 'You Win!';
  } else {
    count--;
    document.getElementById('gameResult').innerText = 'You Lose!';
  }

  updateScore();

  // Check for game end condition
  if (count === 3) {
    alert('Congratulations! You win the game!');
    count = 0;  // Reset score after winning
    updateScore();
  } else if (count === -3) {
    alert('Oops! You lose the game!');
    count = 0;  // Reset score after losing
    updateScore();
  }
}

// Play round function
function playRound(playerChoice) {
  const randomNumber = Math.random() * 3;
  if (randomNumber <= 1) {
    computerChoice = 'stone';
  } else if (randomNumber <= 2) {
    computerChoice = 'scissor';
  } else {
    computerChoice = 'paper';
  }

  // Display the choices and handle the result
  displayChoices(playerChoice, computerChoice);
  handleResult(playerChoice, computerChoice);
}

// Event listeners for each button
document.getElementById('stoneBtn').addEventListener('click', function() {
  playerChoice = 'stone';
  playRound(playerChoice);
});

document.getElementById('scissorBtn').addEventListener('click', function() {
  playerChoice = 'scissor';
  playRound(playerChoice);
});

document.getElementById('paperBtn').addEventListener('click', function() {
  playerChoice = 'paper';
  playRound(playerChoice);
});