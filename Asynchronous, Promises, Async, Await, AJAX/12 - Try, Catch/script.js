const countriesContainer = document.querySelector(".container");

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
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
            </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforebegin", msg);
};

const whereAmI = async function () {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    const responseGeo = await fetch(
      `https://geocode.xyz/${lat}, ${lng}?json=1`
    );
    if (!responseGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = responseGeo.json();

    const response = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!response.ok) throw new Error("Problem getting country location");
    const data = await response.json();
    renderCountry(data[0]);
  } catch (error) {
    renderError(`Something went wrong: ${error.message}`);
  }
};

whereAmI();
