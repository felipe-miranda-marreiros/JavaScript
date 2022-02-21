"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

//Método antigo

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v2/name/${country}`);
// request.send();

//Método novo

const request = fetch("https://restcountries.com/v2/name/portugal");
console.log(request);
