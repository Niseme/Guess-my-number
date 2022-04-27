'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input 
    if (!guess) {
        document.querySelector('.message').textContent = ' 👀 where is your numer?'

        //when the player wins the game
    } else if (guess === secreteNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number';
        document.querySelector('.number').textContent = secreteNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.again').addEventListener('click', function () {
            score = 20;
            secreteNumber = Math.trunc(Math.random() * 20) + 1;
            document.querySelector('.message').textContent = 'Start guessing...';
            document.querySelector('.score').textContent = score;
            document.querySelector('.number').textContent = '?';
            document.querySelector('.guess').value = '';
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
        })

        //when the guess is too high
    } else if (guess > secreteNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '❌ Too high!'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '💩 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secreteNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '❌ Too low!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💩 You lost the game!'
            document.querySelector('.score').textContent = 0;
        }
    }
});
