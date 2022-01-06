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

const openingHours = {
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
};

//transformando propriedade de objetos em array
const prop = Object.keys(openingHours);
// console.log(prop);

let openStr = `We are open on ${prop.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

// console.log(openStr);

//mostrar os valores das propriedades
const values = Object.values(openingHours);
// console.log(values);

//todo o objeto
const entries = Object.entries(openingHours);
// console.log(entries);

//desestruturando
for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close ${close}.`);
}
