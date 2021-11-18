//for loop

for (let rep = 1; rep <= 10; rep++) {

    console.log(`Lifting weights repetition ${rep}`);
};

//while lopp
let rep = 1;

while(rep <= 10){

    console.log(`Lifting weights repetition ${rep}`);

    rep++;
};

//Usamos while loop quando não sabemos quando uma repetição precisa parar. Diferente do FOR, aqui não precisamos declarar um ponto de partida.
//---------------------------------------

//roll dice

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {

    console.log(`You rolled a ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1;
    
    if(dice === 6) console.log('loop is about to end...');
}