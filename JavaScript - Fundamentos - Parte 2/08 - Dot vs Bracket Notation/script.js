const descricaoPessoa = {
    primeiroNome : 'Felipe',
    sobreNome : 'Miranda Marreiros',
    idade : 24,
    altura : 1.65,
    cor : 'Pardo',
    localizacao : ['Santana', 'Amapá', 'Brasil']
};

//dot notation
console.log(descricaoPessoa.primeiroNome);

//bracket notation usando variavel

const verNomes = 'Nome'; //especificamos uma parte do valor que se repete em forma de string
console.log(descricaoPessoa['primeiro' + verNomes]); //tudo que tem ligação com nome é mostrado no console.
console.log(descricaoPessoa['sobre' + verNomes]);

//----------------------------------------------------

//Exemplo de quando não sabemos qual propriedade acessar

const interessadoEm = ('O que você quer saber sobre Felipe? Escolha entre primeiroNome, sobreNome, idade, altura, cor, localizacao');

if(descricaoPessoa[interessadoEm]){ //se o usuário digitar as propriedades que existem dentro do objeto descricaoPessoa, JavaScript retorná com a informaçao
    console.log(descricaoPessoa[interessadoEm]);
} else { //caso contrário, se ele digitar outra coisa que não tenho no objeto, ele ficará com a mensagem else.
    console.log('Propriedade inválida. Escolha entre primeiroNome, sobreNome, idade, altura, cor, localizacao');
}

