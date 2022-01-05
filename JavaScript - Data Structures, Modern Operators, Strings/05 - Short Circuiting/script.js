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
  orderPast: function (ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza : function (mainIngredient, ...otherIgredient){
    console.log(mainIngredient);
    console.log(otherIgredient);
  }
};

// podem usar qualquer tipo de dado, e podem retornar qualquer tipo de dado

console.log(3 || 'Felipe'); //se um valor for verdadeira, então a validação é verdadeira
console.log('' || 'Felipe');
console.log(true || 0);

console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// OR em objetos

let person = {
  name: 'Jack',
  age: 34
}
console.log(person.job || 'unemployed');