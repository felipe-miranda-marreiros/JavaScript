//podemos usar arrays com for loop

const felipeArray = [
    'Felipe',
    'Miranda',
    2021 - 1997,
    'Front-End',
    ['Amanda', 'Jéssica','Liana'],
    true
];

const replica = []; //deixamos uma array vazia que posteriormente vai receber dados do for loop.

for(let i = 0; i < felipeArray.length; i++){ //começamos com 0 porque arrays são zero-based
    console.log(felipeArray[i], typeof felipeArray[i]); //em vez de escrevermos a posição de cada elemento da array, usamos a variável.

    replica[i] = typeof felipeArray[i]; //usamos a mesma declaração for para isso.
};
//em vez de manualmente dizer quando o for loop deve parar, no caso do exemplo ele vai parar quando chegar em 5, podemos simplesmente usar a propriedade length.

//Assim, quando adicionarmos novos elementos a Array, não teremos que modificar o for loop toda vez já que basicamente estamos calculando a quantidade de elementos da Array.

//podemos também duplicar uma array com base em outra array criando uma array vazia com base no felipeArray.

console.log(replica);

//Exemplo 2 - preenchendo uma array vazia

//preenchendo uma array com for loop
const years = [1991, 2007, 1969, 2020];

const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push (2037 - years[i]); //adicionamos push() pra adicionar os valores.
}

console.log(ages);