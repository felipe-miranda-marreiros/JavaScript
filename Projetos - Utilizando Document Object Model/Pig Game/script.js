'use strict';

//Selecionando elementos:

//aqui será selecionado o elemento CSS para que exista a transição visual do jogador quando for a vez dele.
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0'); //forma de selecionar um elemento por ID, semelhante ao CSS.

const score1El = document.getElementById('score--1'); //forma de selecionar um elemento ID, mas dessa vez usando getElementById. Nesse processo não precisamos usar "#" para selecionar a classe.

const diceEl = document.querySelector('.dice');

//selecionando todos os botões do HTML.
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//selecionando elementos do Placar Atual
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let playing = true;

const switchPlayer = function () { //fará parte do else.

    //essa parte do else irá mudar para o próximo jogador
    document.getElementById(`current--${activePlayer}`).textContent = 0; //será mostrado para o usuário que o seus pontos voltaram para zero
        currentScore = 0; //reseta os pontos quando passar para o próximo player
        activePlayer = activePlayer === 0 ? 1 : 0; //reatribuíndo valor para trocar, dinamicamente, a vez de cada jogador de acordo com as condições acima.        
        //aqui será usado a função toggle que irá colocar uma classe em um elemento que não tiver ela, no caso player--active está ativo apenas no player--0. Então, posteriormente, ela também irá para player--1 quando for a vez dele.
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
};

//resetando os pontos dos jogadores para 0
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //ocultando dado para o jogadores

//Implementando funcionalidades do dado

let currentScore = 0; //todos os pontos do Placar Atual começarão com zero.


const score = [0, 0]; //os pontos serão armazenados em uma array
let activePlayer = 0; //aqui será trocado para 0 ou 1 de acordo com o IF-ELSE abaxio.


btnRoll.addEventListener('click', function () {
    
    if (playing) { // se o jogo está rodando, então código abaixo será executado.

    // 1 - aqui será gerado um valor aleátorio pro dado;
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2 - o dado só será visualizado pelo jogador depois que a função 1 estiver sido concluída;
    diceEl.classList.remove('hidden'); //agora o dado está visivel
    diceEl.src = `dice-${dice}.png`; //além de visivel está com o dado com o valor correto gerado pela função Math.random.

    // 3 - Se o dado gerar o valor 1, então o jogador perde todos os pontos e passará a vez para outro jogador
    if (dice !== 1){
        // Se o resultado não for 1, então os pontos serão guardados no Placar Atual.
        currentScore += dice;

        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        // current0El.textContent = currentScore;

    } else {

        switchPlayer();
    };
};   
});

//sistema que vai guardar os pontos caso o jogador opte por segurar os pontos. Ela será guardar na array acima.
btnHold.addEventListener('click', function () {
    
    if (playing) {
    //Essa função tem como objetivo:
    

    // 1 - guardará a pontuação para o jogardor 0 ou 1;
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]; 

    //2 - Verifica se um jogador tem pontuação mair ou igual a 100. Se sim, então o jogo acaba aqui.
    if (score[activePlayer] >= 100){

        playing = false; //fará que o jogo pare quando um jogador ganhe. O jogo só voltará funcionar quando clicar em Novo Jogo.
        diceEl.classList.add('hidden'); //dado volta a ficar oculto
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        //3 - Se não, o jogo continua e o próximo jogador faz uma nova partida.
    } else {

        switchPlayer();
    };
};
});