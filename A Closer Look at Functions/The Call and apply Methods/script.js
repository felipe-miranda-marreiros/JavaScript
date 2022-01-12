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
