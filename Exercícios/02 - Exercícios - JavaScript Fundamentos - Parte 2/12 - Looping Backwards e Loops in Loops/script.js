/*

LECTURE: Looping Backwards and Loops in Loops

1. Store this array of arrays into a variable called 'listOfNeighbours'
[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];
2. Log only the neighbouring countries to the console, one by one, not the entire
arrays. Log a string like 'Neighbour: Canada' for each country

*/

//Solução
const listOfNeighbours = [

    ['Canada', ' Mexico'],
    ['Spain'],
    ['Norway', ' Sweden', ' Russia']

];

for(let countries = 0; countries < listOfNeighbours.length; countries++){
    
    for(let neighbours = 0; neighbours < listOfNeighbours[countries].length; neighbours++)
    console.log(`Neighbours: ${listOfNeighbours[countries][neighbours]}`);
}