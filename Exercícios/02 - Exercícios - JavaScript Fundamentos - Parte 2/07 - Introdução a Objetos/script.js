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
    neighbour : neighbours

};

console.log(myCountry);
