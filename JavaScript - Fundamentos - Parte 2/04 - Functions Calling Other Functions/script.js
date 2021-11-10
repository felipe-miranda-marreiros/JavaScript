//funções chamando outras funções

function cutFruitPieces(fruit) {
    return fruit * 4;    
}

function fruitProcessor (apples, oranges){
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//Data Flow
/*
1 - Invocamos fruiProcessor;
2 - os argumentos de fruitProcessor vai para o parametro dele;
3 - Depois do parametro, ele vai pra função cutFruitPieces;
4 - Chegando na função cutFruitPieces ele tem que ir para o parametro dele;
5 - o parametro retorna pra dentro do escopo da função e faz o que deve ser feito.
6 - ela volta pra função invocada dentro de fruitProcessor;
7 - ela fica armazenada na variavel applePieces ou orangesPieces;
8 - que assim vai ser armazenado em Juice, e aplicado no Template Literals.
9 - o console.log(fruitProcessor) é mostrado no console.
*/