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

//set com strings
console.log(new Set("Felipe"));

//tamanho de um Set
console.log(ordersSet.size);

//verificar se existe um valor em Set
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Breed"));

//adicionando valor
ordersSet.add("Garlic Breed");
ordersSet.add("Garlic Breed");
console.log(ordersSet);

//deletar elemento em especifico
ordersSet.delete("Resotto");

console.log(ordersSet);

//deletar todos os elementos
// console.log(ordersSet.clear());

//Sets podem ser usados em loops
for (const order of ordersSet) {
  console.log(order);
}

//exemplo usando Set

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

//transformando Set em Array #Primeiro Métdod
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

//transformando Set em Array #Segundo método
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);


//ver quantas letras tem em um nome
console.log(new Set('felipemirandamarreiros').size);
