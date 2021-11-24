'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


const closeModal = function () {

    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const openModal = function() {
    
    modal.classList.remove('hidden'); 
    overlay.classList.remove('hidden');

};

for(let i = 0;  i < btnsOpenModal.length; i++){
    
    btnsOpenModal[i].addEventListener('click', openModal);
    
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) { //função que vai fechar o modal de acordo com uma determinada classe.
   
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) { //especificamos qual tecla será necessária pra fechar o modal, no caso ESC.

         //se a classe não conter o que foi especificado nos parametros, então a função abaixo será executada. Por exemplo, hidden quer dizer que o modal está fechado. Então, caso a classe acima (modal) estiver aberta, a função abaixo será invocada ao apertar ESC.

         closeModal();
    };

});