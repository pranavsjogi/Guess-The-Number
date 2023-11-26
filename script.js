'use strict';
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (score != 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No number';
      document.querySelector('.guess').value = '';
    } else if (guess === secretnumber) {
      document.querySelector('.message').textContent = 'Correct Number';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretnumber;

      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      docu;
    } else if (guess > secretnumber) {
      document.querySelector('.message').textContent = 'To high';
      score--;
      document.querySelector('.guess').value = '';
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else if (guess < secretnumber) {
      document.querySelector('.message').textContent = 'To low';
      score--;
      document.querySelector('.guess').value = '';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess').value = '';
    }
    document.querySelector('.guess').value = '';
  } else {
    document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('.guess').value = '';
    document.querySelector('score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  score = 20;

  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
});
