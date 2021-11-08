//diferença entre triple equals e double equals


//em JavaScrit, é recomendado que se use triple equals para fazer comparações precisas. O porque é que triple equals vai pegar um número como ele é e irá fazer a operação lógica.

/*const idade = 18;
if (idade === 18){
    console.log("You're over or equal 18 years old (strict)");
}else{
    (idade == 18) 
    console.log("You just became adult (loose)");
}

// diferente de double equals que pode pegar uma string e converter para um número, devido o JavaScript fazer a conversão automaticamente, como no exemplo abaixo.

const age =  '18';
if (age === 18) console.log("You're over or equal 18 years old (strict)");

if (age == 18) console.log("You just became adult (loose)");*/

//como o valor da váriael é uma string e o JavaScript faz a conversão para número, apenas o double equals vai identificar esse processo e iraá gerar um resultado.

//------------------------------------------------------------------

//podemos pedir informações para um usuário e amarzena-las em uma variavel. Obviamente que o dado fornecido pelo usuário é string por padrão do JavaScript. Podemos ver isso no exemplo abaxio e no console na hora de imprimir o resultado.

/*const favorite1 = prompt("What's your favorite number?");
console.log(favorite1);
console.log(typeof favorite1);

if (favorite1 === 24) console.log("That's a cool number"); //string === number
*/


//para converter uma string para números, temos que usar Number.

const favorite2 = Number(prompt("What's your favorite number?")); //number === number
console.log(favorite2);
console.log(typeof favorite2);

if (favorite2 === 24){
    console.log("24? That's a cool number!");
}else if (favorite2 === 30){
    console.log("Wow, that's a cool number, too.");
}else if (favorite2 === 0){
    console.log("Zero?");
}else{
    console.log("None of the numbers you've said are cool, dude!");
}

if (favorite2 !== 24) console.log("why not 24?");
// para fazer ao contrário de igualdade, podemos fazer diferença "!=" para loose e "!==" para strict.
