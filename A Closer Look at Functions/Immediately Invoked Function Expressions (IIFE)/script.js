"use strict";

const runOnce = function () {
  console.log("this will never run again");
};

runOnce();

//Immediately Invoked Function Expression (IIFE)

//essa função só será chamada uma vez

//Fazer uma função anonima, sem nome e não atribuída a uma variável
//Colocamos ela em parenteses
(function () {
  console.log("this will never run again");
  //aqui chamamos ela assim.

  
})();

//Também podemos fazer com Arrow Functions a mesma coisa

(() => console.log("This will also never run again"))();
