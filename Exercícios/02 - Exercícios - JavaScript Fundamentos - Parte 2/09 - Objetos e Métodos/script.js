
/*

LECTURE: Object Methods

1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.

*/

const neighbours = new Array ('Cuba', 'Argentina', 'Venezuela'); //array

const myCountry = { //objeto

    country : 'Brazil',
    capital : 'Brasília', 
    language : 'Portuguese',
    population : 200,
    neighbour : neighbours, //array

    //método
    describe () { //usando this

        this.summary = `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbour.length} neighbouring countries and a capital called ${this.capital}.`;
        return this.summary;
    }
};

console.log(myCountry.describe());