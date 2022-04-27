'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //when there is no input 
    if (!guess) {
        displayMessage('👀 where is your number?');

        //when the player wins the game
    } else if (guess === secreteNumber) {
        displayMessage('🎉 Correct number');
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
            displayMessage('Start guessing...');
            document.querySelector('.score').textContent = score;
            displayMessage('?');
            document.querySelector('.guess').value = '';
            document.querySelector('body').style.backgroundColor = '#222';
            document.querySelector('.number').style.width = '15rem';
        })
    }

    else if (guess !== secreteNumber) {
        if (score > 1) {
            displayMessage(guess > secreteNumber ? '❌ Too high!' : '❌ Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('💩 You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }

});
