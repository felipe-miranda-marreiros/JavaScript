"use strict";

const secureBooking = function () {
  //variável com no contexto da função, pode ser acessada por outras funções criadas aqui
  let passengerCount = 0;

  //a função secureBooking retornará a função anonima abaixo
  return function () {

    //a função anonima terá acesso a variável passengerCount porque ela faz parte do Lexical Scope
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

//guardamos a função secureBooking em uma variável, criando uma nova função.
const booker = secureBooking();

//chamamos a nova função. No entanto, as informações da antiga função(secureBooking), ainda são lembradas, pois por alguma razão do JavaScript, ela ainda é guardada no Heap Memomry.
booker();
booker();
booker();

console.dir(booker);