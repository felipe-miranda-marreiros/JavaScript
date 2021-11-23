'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;
let score = 20;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess){

        displayMessage('Insira um número para começer!');

    }else if (guess === number){

        displayMessage('Número correto!');
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    
        document.querySelector('.number').textContent = number;
        ;

        if (score > highscore){

            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        };
        
    }else if (guess !== number){

        if(score > 1){

        document.querySelector('.message').textContent = guess > number ? 'Valor alto demais!' : 'Valor baixo demais!';
        score--;
        document.querySelector('.score').textContent = score;

        }else{
        displayMessage('Você perdeu todos os pontos!');
        document.querySelector('.score').textContent = 0;
        }
    }

    document.querySelector('.again').addEventListener('click', function () {
        
        score = 20;
        number = Math.trunc(Math.random() * 20) + 1;
        

        displayMessage('Começando o jogo...')
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';


        document.querySelector('body').style.backgroundColor = '';
        document.querySelector('.number').style.width = '';

    });
})