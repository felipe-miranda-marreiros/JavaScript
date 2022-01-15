"use strict";

//Exemplo 1
let f;

//criamos uma função sem retorno
const g = function () {
  //criamos uma variável local
  const a = 23;

  //reatribuismo a variável global f com uma função;
  f = function () {
    console.log(a * 2);
  };
};

//chamamos a primeira função que irá apresentar a variável a;
g();
// a função f() vai mostrar a soma.
f();

//Reatribuindo a variável F

//a mesma coisa acontece aqui
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();

console.dir(f);

//exemplo 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  console.log(`Will start boarding in ${wait} seconds`);

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
};

const perGroup = 1000;

//a primeira função boardPassengers() é chamada, logo em seguida setTimout() também.
//Ou seja, primeiro boardPassengers(), depois setTimout()
boardPassengers(180, 3);

//Exemplo usando setTimeout()
setTimeout(function () {
  console.log("TIMER");
}, 1000);
