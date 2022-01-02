'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//desestruturando array
let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);
//usamos vaco para pular um elemento.

//trocando variáveis de lugar
[main, secondary] = [secondary, main]
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
//o resultado será Garlic Breed e Pizza da funçãoa acima.

console.log(starter, mainCourse);

//array com nested destructuring
const nested = [2, 4, [5, 6]];

//pegando valores da primeira e segunda array e colocando em variáveis.

const [i, ,[j, k]] = nested;

console.log(i, j, k);

//default values

//atribuíndo valores para variáveis desestruturadas, assim podemos saber o index de cada um.
const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);
//r terá valor de 1, que ele não existe na array.
