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
  }
};

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt('Ingredient 2?'), prompt('Ingredient 3?')];

// restaurant.orderPast(...ingredients);



const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];

console.log(...newArr);

///////////////////////////

//adicionado novo elemento em uma Array
const newMenu = [...restaurant.mainMenu, 'Gnocci']; //estamos criando uma nova Array e não manipulando.
console.log(newMenu);

//copiando Array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Combinando duas Array ou mais
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//usando Spread Operator com Strings
const str = 'Felipe';
const letters = [...str, ' ','S.'];
console.log(letters);

//Objetos

//copiando objeto com novas propriedades
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

//expandindo as propriedades do objeto
const restaurantCopy = {...restaurant};

//mudando valor de uma propriedade
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);