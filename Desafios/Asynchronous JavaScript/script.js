const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Too many requests ${response.status}.`);
      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name${data.country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Too many requests ${response.status}.`);
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) =>
      console.log(`Something went wrong with Geocode. ${error.message}`)
    );
};

whereAmI(52.508, 13.381);
