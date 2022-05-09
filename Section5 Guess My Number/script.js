'use strict';
/*
console.log(document.querySelector(".message").textContent); // . for class  # for ID


document.querySelector('.number').textContent = 13;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value);
*/


let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message
}
const keepScore = function(xx){
    document.querySelector('.score').textContent = xx
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess);

// no input
    if(!guess){
        displayMessage('😖no number ');
// WIN
    } else if(guess === secretNumber){
        displayMessage('😌Correct Number');
        document.querySelector('.number').textContent = secretNumber ;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
// Wrong guess
    } else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '😫too high!' : '😥too low!');
            score--;
            keepScore(score);
            } else {
            displayMessage('🥺You looooose!');
            keepScore(0);
            }
    } else {
        displayMessage('🥺You looooose!');
        keepScore(0);
        }
    });
// Again
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    keepScore(score);
    secretNumber = Math.trunc(Math.random()*20) + 1;
    displayMessage('Start guessing...');
    document.querySelector(".number").textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
