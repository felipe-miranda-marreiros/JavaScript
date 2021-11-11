//Arrays
// essa forma de armazenar dados, quando se tem uma grande quantidade deles, é muito cansativa e nada eficiente, como no exemplo abaixo:


// const cor1 = 'Azul';
// const cor2 = 'Amarelo';
// const cor3 = 'Vermelho';
// const cor4 = 'Laranja';

// //Com Arrays podemos armazenar todos os dados acima em uma única variável chamada cores.

// //Exemplo Array:

// const cores = ['Azul', 'Amarelo', 'Vermelho', 'Laranja'];


//Outra forma de fazer a função Array. Em vez de colchetes, usamos parenteses.

// const cores2 = new Array ('Azul', 'Amarelo', 'Vermelho', 'Laranja');

// cores2[1] = 'Preto'; //iremos substituir a cor amarela por preto.

// console.log(cores2);
// //Como no exemplo abaixo, podemos ter acesso ao conteúdo de uma Array
// console.log(cores2[0]);
// console.log(cores2.length); //length irá mostrar a quantidade de elementos de uma array.
// console.log(cores2[cores2.length - 1]);//podemos usar length para saber qual é o último elemento de uma array.

// const primeiroNome = 'Felipe';
// const felipe = [primeiroNome, 'Miranda', 'Marreiros', 2021 - 1997, 'Amanda', 'Desempregado', cores];

// console.log(felipe.length);

const calcIdade = function (idade){
    return (2021 - idade);
}

const idades = [1990, 1982, 2002, 2009, 2015];

const result1 = calcIdade(idades[0]);
const result2 = calcIdade(idades[1]);
const result3 = calcIdade(idades[2]);
const result4 = calcIdade(idades[idades.length - 1]); //pulamos para o último com length.

const todosResultado = [calcIdade(idades[0]), calcIdade(idades[1]), calcIdade(idades[2]), calcIdade(idades[idades.length - 1])];

console.log(todosResultado);