//arrow function
//forma simplista de fazer uma função

const anosAteAposentadoria = (idade) => {
    const idade_usuario = 2037 - idade;
    const aposentadoria = 65 -idade_usuario;
    return aposentadoria;
}

console.log(anosAteAposentadoria(1991));