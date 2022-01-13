"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, "Felipe Miranda");
lufthansa.book(657, "Paula Lins");

const erowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

//This Keyword não funciona mais aqui, visto que o método deixa de ser um método e vira uma função qualquer, nova.
const book = lufthansa.book;

//essa função não funciona, retorna undefined, visto que não existe mais This Keyword
// book(23, "Sarah Williams");

//usamos o método call() para direcionar o This Keyword para erowings para não não precisarmos digitar manualmente a função denovo.
book.call(erowings, 23, "Sara Williams");

const swiis = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

//Agora o This Keyword aponta para o objeto swiis,

book.call(swiis, 555, "Roberto Miranda");

//Apply Method - método antigo
const flightData = [584, "George Cooper"];
// book.apply(swiis, flightData);

//usando Spread
book.call(swiis, ...flightData);

////////////////////////usando BIND//////////////////////////

//essa função não funciona, retorna undefined, visto que não existe mais This Keyword
// book(23, "Sarah Williams");

// Bind() permite não só guardar uma cópia do método, mas também guardar o This Keyword
const bookEW = book.bind(erowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiis);

bookEW(23, "Steven Williams");
bookLH(23, "Joseph Sins");

const bookEW23 = book.bind(erowings, 23); //podemos guardar também só a primeira parte do parâmetro da função, no caso 23

bookEW23("Felipe Miranda"); //e aqui dizer apenas o nome
bookEW23("Martha Cooper");

///////////////////////////////////////////////////////////////////////////

//Usando Bind() com EventListener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));



const test = (rate) => (value) => value + value * rate;

const result = test(0.1)(200);

console.log(result > 1 ? "Tá caro" : "Tá caro");
