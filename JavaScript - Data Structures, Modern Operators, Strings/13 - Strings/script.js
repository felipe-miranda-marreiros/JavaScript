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

//////////////////////////////////////////////////////////////////////

//Mudar para maisculo ou minusculo
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//Consertar letras em um nome, exemplo;

//Primeiro método
const passenger = "FeLiPE";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

//Colocando em uma função
function correctName(name) {
  let firstFix = name.toLowerCase();
  let secondFix = name[0].toUpperCase() + firstFix.slice(1);
  return console.log(secondFix);
}
correctName("FeLiPE");

//Comparando Emails e consetando strings

const email = "hello@felipe.com";
//string com input todo fudido
const loginEmail = "  Hello@Felipe.com \n";

//Primeiro método usando trim()
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

//Segundo método usando trim()
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

//////////////////////////////////////////////////////

//usando função replace() para trocar elementos de uma string
const priceGB = "288,97£";

//a função replace() tem dois parâmetros - o primeiro é elemento que desejamos trocar, e o segundo é o novo elemento que deve entrar.
const priceUS = priceGB.replace("£", "$").replace(",", ".");

console.log(priceUS);

//trocando palavras com o método replace()
const announcement =
  "All passagers come to boarding door 23. Boarding door 23.";

//Primeiro método
console.log(announcement.replace(/door/g, "gate"));

//Segundo método usando replaceAll()
console.log(announcement.replaceAll("door", "gate"));

/////////////////////////////////////////////////////////////////////////////////

//Métodos que retornam booleanos

const planes = "Airbus A320neo";
console.log(planes.includes("A320"));
console.log(planes.includes("Boeing"));
console.log(planes.startsWith("Air"));

if (planes.startsWith("Airbus") && planes.endsWith("neo")) {
  console.log("Part of the New Airbus Family");
}

//Exercicio

const checkBaggage = function (items) {
  //primeiro covertemos para lowerCase para depois fazer a comparação. Se isso não acontecer, a função permitirá o passageira a entrar com faca e armado.
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You're not allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snaks and a gun for protection");
