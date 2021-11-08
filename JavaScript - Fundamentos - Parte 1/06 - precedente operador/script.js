const anoAtual = 2021;
const idadeFelipe = anoAtual - 1997;
const idadeAmanda = anoAtual - 1995;

console.log(idadeFelipe);
console.log(idadeAmanda);

console.log(anoAtual - 1997 > anoAtual - 1995); //o resultado será falso, pois idadeFelipe é menor que idadeAmanda

//devido a número de prioridade, o javascript primeiro calculará as operações matemáticas para depois passar para as operações lógicas.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x, y; //podemos declarar duas variaveis na mesma linha, separando por virgula.
x = y = 25 + 25 - 25; //como dito, o javaScript vai fazer primeiro as operações matemáticas para depois ir para as operações lógicas/booleanas
console.log(x, y); // como x é igual a y, ambos receberam o mesmo valor do resultado da operação matemática

const idadeR = 27;
const idadeS = 32;
const mediaIdade = (idadeR + idadeS) / 2; // parenteses tem prioridade na operação matemática

console.log(mediaIdade);