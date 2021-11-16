//Imagine que precisamos repetir a função log abaixo 10 vezes
// console.log('lifting weights repetition 1');
// console.log('lifting weights repetition 2');
// console.log('lifting weights repetition 3');
// console.log('lifting weights repetition 4');
// console.log('lifting weights repetition 5');
// console.log('lifting weights repetition 6');
// console.log('lifting weights repetition 7');
// console.log('lifting weights repetition 8');
// console.log('lifting weights repetition 9');
// console.log('lifting weights repetition 10');

//Poderiamos fazer isso dessa maneira, porém, estariamos quebrando a regra do Don't Repeat Yourself

//Além disso, por exemplo, se tivessemos um problema de ortografia na mensagem, teriamos que consertar mensagem por mensagem, o que também quebra a regra do Don't Repeat Yourself

//Para resolver esse problema, podemos usar o For loop


//O For Loop continua rodando enquanto a condição estabelecida for verdadeira
for(let rep = 1; rep <= 10; rep++){
    console.log(`lifting weights repetition ${rep}`);
};

/*

O For Loop tem três expressões específicas seguidas da declaração do bloco de códigos que serão executados enquanto a condição for verdadeira. As expressões devem ser separadas por ponto e vírgula (semicolon). 

Expressão Inicial (let rep = 1): corresponde à declaração da variável ou à atribuição de qual é o valor inicial utilizado. Vale dizer que também pode ser atribuída uma expressão para inicializar a variável. No exemplo utilizado, o loop começa com 1. 

Expressão Condicional (rep <= 10): é uma expressão em que é feito um teste booleano para constar se uma condição seja verdadeira, e então, executar o código correspondente ou sair da estrutura de repetição. Quando a condição for false, o loop para. No exemplo utilizado, o loop termina quando chegar em 10. 

Atualização da expressão inicial (rep++): é a alteração da variável utilizada na primeira expressão. Sem ela, a repetição não se inicia. Em outras palavras temos rep = rep + 1. 

*/