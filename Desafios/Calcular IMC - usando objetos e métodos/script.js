/*

------------Coding Challenge #1------------------


Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.


Test data:


§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

//Solução

const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;



const calcImcMark = markMass / (markHeight) ** 2;
const calcImcJohn = johnMass / (johnHeight * johnHeight);

let higherImc = calcImcMark > calcImcJohn;

//se Mark tem maior IMC que John ou vice-versa
console.log(higherImc);
//mostrando o calculo no console
console.log(calcImcMark, calcImcJohn);

// ----------------- Coding Challenge #2 --------------------

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:

1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

*/

// Solução

if (calcImcMark > calcImcJohn){ //ou vice-versa
    console.log(`Mark's BMI is higher than John's`);
} else if (calcImcJohn > calcImcMark) {
    console.log(`John's BMI is higher than Mark's`);
} else {
    console.log('Invalid values');
}

//template literals

console.log(`Mark has ${calcImcMark} and John has ${calcImcJohn}`);
console.log(`Mark's BMI ${calcImcMark} is ${calcImcMark > calcImcJohn ? 'Higher' : 'Lower'} than John`);

/*

Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:

1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

*/

