"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //nova forma de declarar função, aqui excluí-se function da sintaxe.
  orderPast(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIgredient) {
    console.log(mainIngredient);
    console.log(otherIgredient);
  },
};

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Resotto",
  "Pasta",
  "Pizza",
]);

const rest = new Map();

rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are close");
  
const time = 21;

// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// console.log(rest);

// console.log(rest.clear());
// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, "Test");
// console.log(rest.get(arr));

// console.log(rest);

const arr = [rest.get('categories')];

console.log(arr);
