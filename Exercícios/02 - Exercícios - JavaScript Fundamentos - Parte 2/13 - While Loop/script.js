/*

LECTURE: The while Loop

1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing',
but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while
loop?

*/

//solução

const population = [200, 1441, 68];

let percentages2 = [];

percentageOfWorld1 = (population) => (population / 7900) * 100;


let i = 0;
while (i < population.length){
    
    percentages2.push(percentageOfWorld1(population[i]));
    i++;

};

console.log(percentages2);

//achei diferença nenhuma nisso xD