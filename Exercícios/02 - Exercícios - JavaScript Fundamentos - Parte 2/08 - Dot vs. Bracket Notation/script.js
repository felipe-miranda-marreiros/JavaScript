/*
LECTURE: Introduction to Objects

1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)

*/

const neighbours = new Array ('Cuba', 'Argentina', 'Venezuela');

const myCountry = {
    
    country : 'Brazil',
    capital : 'Brasília', 
    language : 'Portuguese',
    population : 200,
    neighbour : neighbours

};

console.log(myCountry);

/*

LECTURE: Dot vs. Bracket Notation

1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.

*/

//data 1
const countryDescription = `${myCountry['country']} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbour.length} neighbouring countries and a capital called ${myCountry.capital}.`;

console.log(countryDescription);

//data 2

const countryDescription2 = `${myCountry['country']} has ${myCountry['population'] + 2} million ${myCountry.language}-speaking people, ${myCountry.neighbour.length} neighbouring countries and a capital called ${myCountry.capital}.`;

console.log(countryDescription2);