/*
Em JavaScript, temos operadores de comparação e operadores booleanos.

---------------------
Operadores de comparação são usados para tomar decições ou exibir resultados. É comumente usado com if, else if e else.

Eles são:

> maior que
< menor que

== igual que - observe que esse sinal de igualdade é usado para converter strings em números. Também chamado de loose.
=== igual que - observe que esse sinal é usado para dar igualdade a números que não estão dentro de uma string. Ou seja, que não precisam de conversão. Também são chamados de strict.

>= maior ou igual que
<= menor ou igual que

!== diferente que

-----------------------------------

Além de operadores de comparação, temos operadores booleanos. Servem especialmente para tomada de decisão. Eles são

AND - usado quando duas operações apresentam valores verdadeiros. Aqui, se uma operação tiver um dado falso, logo o resultado será falto. Aqui é preciso que ambos os resultados sejam verdadeiros para que seja validado como verdadeiro.

OR - Diferete de AND, aqui precisamos que apenas um valor seja verdadeiro para que o resultado seja validado como verdadeiro. Independente de quantas variaveis estiverem falsas, aqui uma verdadeira sobrepoe as outras.

NOT - usamos not para reverter o valor de uma operação booleana. Se ela for verdadeira, revertemos para falso.

Sendo assim temos:

and = &&
or = ||
not = !

*/

const lincecaParaDirigir = true;
const temBoaVisao = true;


const estaCansado = true;
const estaSobrio = false;

if(lincecaParaDirigir && temBoaVisao){
    console.log("Você está apto para digirir!");
}else if (estaCansado || estaSobrio){
    console.log("Você não está apto para digirir!");
}
