'use strict';

//Selecionando elementos:
const score0El = document.querySelector('#score--0'); //forma de selecionar um elemento por ID, semelhante ao CSS.

const score1El = document.getElementById('score--1'); //forma de selecionar um elemento ID, mas dessa vez usando getElementById. Nesse processo não precisamos usar "#" para selecionar a classe.

const diceEl = document.querySelector('.dice');

//resetando os pontos dos jogadores para 0
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //ocultando dado para o jogadores