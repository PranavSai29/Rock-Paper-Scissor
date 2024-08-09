const buttons = document.querySelectorAll('.choices button');
const result = document.querySelector('.result');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    const winner = getWinner(userChoice, computerChoice);
    result.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${winner}`;
  });
});

function getWinner(player, computer) {
  if (player === computer) return "It's a tie!";
  if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}
