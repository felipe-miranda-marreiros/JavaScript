//suspenção da carteira de motorista

let ultima_infracao_mes = 12;
let tipo_infracao = "Gravissíma";
let total_pontos = 35;

const suspensao = ultima_infracao_mes >= 12 && tipo_infracao == 'Gravissíma' && total_pontos >= 35 ? console.log("Sua carteira vai ser suspensa, corre!") : console.log("Sua carteira não vai ser suspensa. Ta de boa ai, parceiro");