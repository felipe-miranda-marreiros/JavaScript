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