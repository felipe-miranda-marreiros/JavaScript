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

const airline = "TAP air Portugual";
const plane = "A320";

//podemos usar indexOf para saber a posição de uma letra em uma string.
console.log(airline.indexOf("r"));

//podemos também usar lastIndexOf para saber em qual letra da última posição se encontra.
console.log(airline.lastIndexOf("r"));

//Podemos ver a posição de uma palavra complete em uma franse;
console.log(airline.indexOf("Portugual"));

//Podemos usar o método Slice() para extrair determinada palavra de uma frase de acordo com seu index;
console.log(airline.slice(4));

//Podemos passar um segundo valor para o método Slice(), basicamente o primeiro paramêtro é o inicio (onde a palavra começa), e o segundo paramêtro é o (onde a palavra termina);
console.log(airline.slice(4, 7));

//Sem saber qual é o Index, sem hardcoding
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

//extraindo as ultimas letras da palavra 'Portugal'
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSet = function (seat) {
  // B e E são assentos do meio
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky!");
  }
};

checkMiddleSet("11B");
checkMiddleSet("23C");
checkMiddleSet("3E");
