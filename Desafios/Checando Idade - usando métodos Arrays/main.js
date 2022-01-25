/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.


Your tasks:

Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)

2. Create an array with both Julia's (corrected) and Kate's data

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")

4. Run the function for both test datasets

Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/

const data1 = [3, 5, 2, 12, 7];
const data2 = [4, 1, 15, 8, 3];

const data3 = [9, 16, 6, 8, 3];
const data4 = [10, 5, 6, 1, 4];

function checkDogs(arr1, arr2) {
  let correctData = arr1.slice(1, -2);
  let merge = correctData.concat(arr2);

  merge.forEach((verifyAge, i) => {
    verifyAge >= 3
      ? console.log(
          `Dog number ${i + 1} is an adult with ${verifyAge} years old.`
        )
      : console.log(
          `Dog number ${i + 1} still a puppy with ${verifyAge} years old.`
        );
  });
}

checkDogs(data1, data2);

/*

Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4

2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages)

4. Run the function for both test datasets

Test data:

§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

 */

const data5 = [5, 2, 4, 1, 15, 8, 3];

const data6 = [16, 6, 10, 5, 6, 1, 4];

function calcAverageHumanAge(arr) {
  const dogAge = arr
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18);
  const averageAge = dogAge.reduce((acc, age) => acc + age) / dogAge.length;
  return console.log(averageAge);
}

calcAverageHumanAge(data5);
calcAverageHumanAge(data6);

/*
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!

Test data:

§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

const arrowAverageAge = (arr) =>
  arr
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age > 18)
    .reduce((acc, age, arr) => acc + age / arr);

console.log(arrowAverageAge(data5));
