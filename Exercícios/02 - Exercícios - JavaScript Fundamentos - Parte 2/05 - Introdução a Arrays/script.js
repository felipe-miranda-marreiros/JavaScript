/*

LECTURE: Function Declarations vs. Expressions


1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)

*/

//declaration
function percentageOfWorld1 (country, population){
    return `${country} ${(population / 7900) * 100}`;
}

//expression
const percentageOfWorld2 = function (population){
    return (population / 7900) * 100;
}

console.log(percentageOfWorld1('China', 1441));
console.log(percentageOfWorld1('Brazil', 200));
console.log(percentageOfWorld1('France', 68));

/*

LECTURE: Arrow Functions

1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = (population) => (population / 7900) * 100;

/*

LECTURE: Functions Calling Other Functions

1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice

*/

describePopulation = (country, population) => {

    const percentage = percentageOfWorld3 (population);
    const country_description = `${country} has ${population} million people, which is about ${percentage} of the world.`;
    
    return country_description;
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('Brazil', 200));
console.log(describePopulation('France', 68));

/*

LECTURE: Introduction to Arrays

1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values

*/

const population = [200, 67, 38, 1402];

console.log(population);
console.log(population.length === 4);

const percentages = [percentageOfWorld3(population[0]), percentageOfWorld3(population[1]), percentageOfWorld3(population[2]), percentageOfWorld3(population[3])];

console.log(percentages);