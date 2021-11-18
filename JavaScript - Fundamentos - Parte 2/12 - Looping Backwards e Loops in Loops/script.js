//looping backwards

const felipe = [
    'Felipe',
    'Miranda',
    2021 - 1997,
    'front-end',
    ['Jéssica', 'Paulo', 'Fernanda']
];

//podemos fazer um loop com uma array de trás pra frente, em vez de seguirmos a ordem do index ([0], [1]).

for(let i = felipe.length - 1; i >= 0; i--){
    console.log(i, felipe[i]);
};

//looping in loops

for(let exercicio = 1; exercicio < 4; exercicio++){ //este loop inicia uma vez a cada 5 carregamentos de pesos (segundo loop);
    console.log(`Começando exercicio ${exercicio}`);

    //a cada inicio de exercicio, este loop será executado (primeiro loop)
    for (let repeticao = 1; repeticao < 6; repeticao++){
        console.log(`Repetição de carregamento de peso ${repeticao}`);
    }

}