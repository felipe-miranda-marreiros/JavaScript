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