'use strict';

//global scope

//lexical scope e scope chain

function calcAge (birthYear){
    const age = 2037 - birthYear;
    
    //terceiro scope
    function printAge () {
        let output = `${firstName}, you're ${age}, born in ${birthYear}`
        console.log(output);


        //segundo scope
        if (birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const firstName = 'Steven';

            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str);

            //primeiro scope
            function add (a, b){
                return a + b;
            }
            console.log(add(5, 7));
        }

        output = 'New OUTPUT';

        console.log(output);
        
        console.log(millenial);
    }
    printAge()

    return age;
}

const firstName = "Felipe"
calcAge(1996); 

///////////////// Hoisting////////////

//Variables

console.log(me);
// console.log(job);
// console.log(year);


var me = 'Felipe';
let job = 'Developer';
const year = 1997;

//Functions

// console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl (a, b) {
    return a + b;
}

const addExpr = function (a, b){
    return a + b;
}

var addArrow = (a, b) => a + b;

// Exemple

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart () {
    console.log('All products deleted');
}

////////////////////////This Keyword

// const calcularIdade = function (ano) {
//     console.log(2021 - ano);
//     console.log(this);
// }

// calcularIdade(1997);

/////Arrow Function

const calcularIdade = ano => {
    console.log(2021 - ano);
    console.log(this);
}

calcularIdade(1997);

const felipe = {
    year: 1997,
    lastName: 'Marreiros',
    calcAge: function () {
        console.log(this);
        console.log(2021 - this.year);
    }
}

felipe.calcAge();


const matilda =  {
    year: 1997,
};

//esse método é chamado de method borrow.
matilda.calcAge = felipe.calcAge;

console.log(matilda);
matilda.calcAge();

const f = felipe.calcAge;

f();

////////////// Functions

const felipe2 = {
    
    firstName: 'Felipe',
    year: 1991,
    lastName: 'Marreiros',
    calcAge: function () {
        console.log(this);
        console.log(2021 - this.year);

        // const self = this;

        // const isMillenial = function () {
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // isMillenial();

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();

    },
    greet: () => console.log(`Hey ${this.firstName}`)
    
};

felipe2.greet();
felipe2.calcAge();


const addExpre = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpre(2, 5);

var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;    
};

addArrow(2, 5, 8);
