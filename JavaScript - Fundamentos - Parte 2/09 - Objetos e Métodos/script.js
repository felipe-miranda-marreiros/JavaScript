

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

const friends = ['Amanda', 'Paulo', 'Liana']; //Array


const felipe = { //objeto

    firstName : 'Felipe',
    lastName : 'Marreiros',
    birthyear : 1997,
    occupation : 'Programmer',
    friends : friends, //array
    hasDriversLicense : false,
    
    calcAge : function () {
        this.age = 2021 - this.birthyear;
        return this.age;
    },

    description: function () {

        this.aboutPerson =`${this.firstName + ' ' + this.lastName} is a ${this.calcAge()}-old ${this.occupation}, he ${this.hasDriversLicense === true ? "has a driver's license" : "has no driver's license"}.`;
        return this.aboutPerson;
    }

};

console.log(felipe.description());

//this é uma forma de referenciar um objeto. Faz parte de uma boa prática em JavaScript, pois evita repetição.