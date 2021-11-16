//podemos usar arrays com for loop

const felipeArray = [
    'Felipe',
    'Miranda',
    2021 - 1997,
    'Front-End',
    ['Amanda', 'Jéssica','Liana'],
    true
];

for(let i = 0; i < felipeArray.length; i++){ //começamos com 0 porque arrays são zero-based
    console.log(felipeArray[i], typeof felipeArray[i]); //em vez de escrevermos a posição de cada elemento da array, usamos a variável.
};
//em vez de manualmente dizer quando o for loop deve parar, no caso do exemplo ele vai parar quando chegar em 5, podemos simplesmente usar a propriedade length.

//Assim, quando adicionarmos novos elementos a Array, não teremos que modificar o for loop toda vez já que basicamente estamos calculando a quantidade de elementos da Array.