'use strict';

function mensagem(){
    console.log("Meu nome é Felipe!");
}

 //esse processo, que está usando a função, é chamado de "invoking", "running" ou "calling" a função.
 mensagem();
 mensagem();
 mensagem();

 function fruitProcessor(apples, oranges) { //declaração da função
     const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //linhas de códigos
     return juice; //o return irá retornar o valor para a constante juice, assim que utilizarmos a função fruitProcessor();
 }

 const appleJuice = fruitProcessor(5, 0); //aqui estamos invocando/chamando/rodando a função fruitProcessor. Ela irá retornar dado para apples e oranges, como foi estabelecido na declaração do fruitProcessor. Ou seja, 5 apples e 0 oranges.
 console.log(appleJuice);
 const orangeJuice = fruitProcessor(6, 8); //mesma coisa com valores diferentes.
 console.log(orangeJuice);