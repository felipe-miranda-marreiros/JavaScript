

const friends = ['Amanda', 'Paulo', 'Liana'];

const felipe = { //objeto

    firstName : 'Felipe',
    lastName : 'Marreiros',
    birthyear : 1997,
    friends : friends, //array
    hasDriversLicense : false,
    
    // calcAge : function (birthyear) { // método
    //     return 2021 - birthyear;
    // }

    calcAge: function () {
        return 2021 - this.birthyear;
    }
};



console.log(felipe.calcAge(this.birthyear)); //podemos chamar a função dentro do objeto da mesma maneira que acessamos qualquer outra propriedade. Nesse caso, usamos Dot.

console.log(felipe['calcAge'](this['birthyear'])); //Assim como dito acima, podemos também usar bracket notation para fazer a mesma operação.

 