'use strict'



//função declarada

apresentacao('Felipe', 24);

function apresentacao(nome, idade) {
    console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
    return apresentacao;    
}

apresentacao('Felipe', 24);

//função expressada

const apresentacao2 = function (nome, idade) {
    console.log(`Meu nome é ${nome} e tenho ${idade} anos`);
    return apresentacao2;    
}

const aluno_nome = apresentacao2('Paulo', 26);

//---------------------------------------------------------
