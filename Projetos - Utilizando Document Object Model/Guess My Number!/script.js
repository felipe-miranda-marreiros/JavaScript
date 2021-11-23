'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;
let score = 20;


document.querySelector('.check').addEventListener('click', function () {
    
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        document.querySelector('.message').textContent = 'Insira um número para começar!';

    }else if (guess === number){

        document.querySelector('.message').textContent = 'Número correto!';
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    
        document.querySelector('.number').textContent = number;
        ;

        if (score > highscore){

            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        };

    } else if (guess > number){

        if(score > 1){

        document.querySelector('.message').textContent = 'Valor alto demais!';
        score--;
        document.querySelector('.score').textContent = score;

        }else{
        document.querySelector('.message').textContent = 'Você perdeu todos os pontos!';
        document.querySelector('.score').textContent = 0;
        }
    } else if (guess < number){
        
        if (score > 1) {

        document.querySelector('.message').textContent = 'Valor baixo demais!';
        score--;
        document.querySelector('.score').textContent = score;
    
        }else {
        document.querySelector('.message').textContent = 'Você perdeu todos os pontos!';
        document.querySelector('.score').textContent = 0;
        }
    };

    document.querySelector('.again').addEventListener('click', function () {
        
        score = 20;
        number = Math.trunc(Math.random() * 20) + 1;
        

        document.querySelector('.message').textContent = 'Começando jogo...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';


        document.querySelector('body').style.backgroundColor = '';
        document.querySelector('.number').style.width = '';

    });
})