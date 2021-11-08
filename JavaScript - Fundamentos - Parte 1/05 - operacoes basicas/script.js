//operadores matemáticos

const agora = 2021;
const idadeFelipe = agora - 1997;
const idadeJessica = agora - 1992;
console.log(idadeFelipe, idadeJessica);

console.log(idadeFelipe * 2, idadeJessica / 10, 2 ** 3);

//2 ** 3 significa 2 elevado a 3, igual a 2 * 2 * 2.

const primeiroNome = "Felipe";
const sobrenome = "Miranda Marreiros";
console.log(primeiroNome + ' ' +  sobrenome);

//podemos colocar uma string fazia para separar um resultado para deixa-lo formal, já que o JS apenas une as variaveis, sem formatação

//operadores de atribuição
let x = 20 + 5; // 25
x += 25; // x = 25 + 25 o valor agora passe a ser 50
x *= 25; // x = 50 * 25 o valor agora passa a ser 1249
x++; // adiciona um valor x + 1
x--; //subtrai
x--; //subtrai
console.log(x);

//operadores de comparação
//usavamos para ter resultados booleanos

const valorCarro1 = 200;
const valorCarro2 = 600;

console.log(valorCarro1 > valorCarro2); // o valor de carro1 é maior que carro2? Resultado será falso.
console.log(valorCarro2 >= valorCarro1); //o valor do carro1 é maior ou igual a 200? o resultado será true;

const isValorMaior = valorCarro1 > valorCarro2; // dessa forma o valor booleano da operação de comparação acima não fique apenas no console ou no console do navegador. Agora ele ficará guardado na variavel isValorMaior.

console.log(agora - 1997 < agora - 1992); //também podemos fazer dessa forma, de modo simplificado

