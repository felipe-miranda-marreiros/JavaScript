/*

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:

1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430

*/

// solução

let dataTest = 275;

let calcPerc1 = dataTest * (15 / 100);
let calcPerc2 = dataTest * (20 / 100);

let condition = dataTest >= 50 && dataTest <= 300 ? calcPerc2 : calcPerc1;

let tip = `The bill is ${dataTest} and the tip is ${condition} so the total is ${dataTest + condition}`;

console.log(tip);