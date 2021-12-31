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