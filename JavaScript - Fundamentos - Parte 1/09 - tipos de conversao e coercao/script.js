
//tipos de conversão
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(24), 25);

//tipos de coerção
console.log("Eu tenho " + 24 + " anos."); //nesse caso, os números serão convertidos para strings se a operação for adição. Ou seja, será uma concatenação. O número precisa estar no meio da operação para que isso ocorra.

console.log('23' - '10' - 3); //nesse caso, strings serão convertidas para números, pois trata-se de uma subtração e o JS automaticamente faz a conversão.

console.log('23' + '10' + 3); //por se tratar de um número que fica no final da operação, o JS entende que trata-se de uma concatenação e junta tudo.

console.log('23' * '2'); //como não há outra função para a multiplicação(no caso da adição, ela será concatenação ou adição), JS entende que são dois números para multiplicação

console.log('24' / '2'); //o mesmo ocorre para divisão
console.log('23' < '24'); // o mesmo ocorre para eventos booleanos
console.log('10' - '4' - '3' - 2 + '5'); //o último valor da subtração será concatenado com uma string, resultando em 15.