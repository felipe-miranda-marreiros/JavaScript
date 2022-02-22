"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data, className = "") {
  const html = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 100000
      ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
          </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
};

//Mostrando o erro(rejected) para o usuário
const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforebegin", msg);
};

//Fazendo uma função para fetch() e também para gerar um error (404)
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

//Consumindo Promises
const getCountryData = function (country) {
  //Country 1
  getJSON(`https://restcountries.com/v2/name/${country}/`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      //Segundo Promise
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error("No neighbour found!");
      //Country 2 - neighbour
      //Sempre temos que retornar o fetch() em um chaining Promise, se não estaremos em um callback hell novamente
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    //Mostrando erro se caso não houver internet(rejected). Catch pode analisar qualquer error em uma chain Promise não importa quantas forem. Usamos catch() no final do chain
    .catch((err) => {
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    //Finally sempre acontece não importa se o estado do promise foi fulfilled ou rejected
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("brazil");
});

//Exemplo de erro e a ativação de catch
getCountryData("australia");
