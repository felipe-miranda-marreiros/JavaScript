'use strict';

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
    
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        document.querySelector('.message').textContent = 'Insira um número para começar!';

    }else if (guess === number){

        document.querySelector('.message').textContent = 'Número correto!';
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    
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
})