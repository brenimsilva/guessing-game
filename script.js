'use strict';

//definitions
document.querySelector('.check').textContent = 'Conferir';
document.querySelector('.message').textContent = 'Tente Adivinhar';
document.querySelector('.between').textContent = 'Entre 1 a 20';
document.querySelector('.again').textContent = 'Recomecar';
document.querySelector('.cat').addEventListener('mouseover', function () {
  document.querySelector('.cat').textContent = '🐱';
});
document.querySelector('.cat').addEventListener('mouseout', function () {
  document.querySelector('.cat').textContent = '😺';
});
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
//Function declarations:
function message(value) {
  return (document.querySelector('.message').textContent = value);
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (score == 1) {
    document.querySelector('.score').textContent = 0;
    message('🚫 Voce Perdeu.');
    document.querySelector('body').style.backgroundColor = 'red';
  } else {
    switch (true) {
      case guess > secretNumber: {
        message('📈 Chutou Alto...');
        score--;
        document.querySelector('.score').textContent = score;
        break;
      }
      case guess < secretNumber: {
        message('📉 Chutou Baixo...');
        score--;
        document.querySelector('.score').textContent = score;
        break;
      }
      case guess <= 0 || guess >= 21: {
        message('Lembre-se de chutar entre 1 a 20');
        break;
      }
      case guess == secretNumber: {
        message('🎉 ACERTOU!!!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
        break;
      }
    }
  }
});

//Setting up RECOMECAR
document.querySelector('.again').addEventListener('click', function () {
  //restore initial positions
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  message('Tente Adivinhar');
});
