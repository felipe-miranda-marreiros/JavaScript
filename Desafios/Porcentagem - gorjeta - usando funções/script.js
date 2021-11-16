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

let condition = dataTest >= 50 && dataTest <= 300 ? calcPerc1 : calcPerc2;

let tip = `The bill is ${dataTest} and the tip is ${condition} so the total is ${dataTest + condition}`;

/*

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:

1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44

*/

function calcTip (value) { //calcula a porcentagem

    return value >= 50 && value <= 300 ? value * (15 / 100) : value * (20 / 100);
};

const bills = new Array (125, 555, 44); //array com dados do enunciado

//calculando porcentagem usando função caclTip
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

//total do valor da conta + gorjeta
const total = [

    tips[0] + bills[0],
    tips[1] + bills[1],
    tips[2] + bills[2]
];

console.log(total);