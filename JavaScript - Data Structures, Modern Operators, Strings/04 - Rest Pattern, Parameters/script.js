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

//método do restaurante
restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
restaurant.orderPizza('mushrooms');


//exemplo de Spread Operator
const arr = [1, 2, ...[3, 4]];

//exemplo de Rest Operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu, 
    ...restaurant.starterMenu
];

console.log(pizza, risotto, otherFood);

//Objetos

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Rest Operator em Funções

const add = function (...numbers){

  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
}

add(2, 3);
add(5, 3, 7, 2);
add(10, 10, 10);

const x = [23, 5, 7];
add(...x);