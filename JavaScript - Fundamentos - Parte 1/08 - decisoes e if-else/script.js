const idade = 15;

if (idade >= 18){
    console.log("Parabéns, você tem a idade necessária.");
}
else{
    const idadeRestante = 18 - idade;
    console.log(`Você não tem a idade necessária. É preciso que tenha ${idadeRestante} ano para continuar.`);
}