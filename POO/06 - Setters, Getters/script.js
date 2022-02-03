"use strict";

//Construction Function

//Construction Function começam com letra maiuscula

const Person = function (FirstName, BirhYear) {
  //Instancia de propriedades
  this.FirstName = FirstName;
  this.BirhYear = BirhYear;

  //métodos - apenas um exemplo abaixo. É uma má prática fazer métodos em Consctruction Function
  //Em vez de métodos, usamos herança de protótipo
  this.calcAge = function () {
    console.log(2021 - this.BirhYear);
  };
};

const felipe = new Person("Felipe", 1997);

console.log(felipe);

//1. Um novo objeto vazio é criado
//2. Quando a função for chamada, o This Keyword será apontado para o Objeto vazio
//3. O objeto vázio é vinculado para o prototype = (Person)
//4. A função automaticamente retorna o Objeto vazio, que na verdade não está mais vazio, mas com a nova propriedades que recebeu.

const amanda = new Person("Amanda", 1996);

console.log(amanda);

console.log(felipe instanceof Person);

//Prototype

//Criamos um método para o Objeto usando Prototype
Person.prototype.calcAge = function () {
  console.log(2021 - this.BirhYear);
};

console.log(Person.prototype);

//chamamos o método igual fazemos com Object Literals
felipe.calcAge();
amanda.calcAge();

//verificando se um prototipo faz parte do Constructor Function
console.log(felipe.__proto__);
console.log(felipe.__proto__ === Person.prototype);

//criando nova propriedade para o Objeto por meio de Prototype
//Vale lembrar que a propriedade não vai ser igual aquelas declaradas explicidamente no Objeto, mas irão ser comportar como um propriedade de Prototype
Person.prototype.species = "Homo Sapiens";

console.log(felipe.species);

//Verificando se um Objeto possui determinada propriedade

console.log(felipe.hasOwnProperty("FirstName"));

//Aqui será dado como falso já que a propriedade criada por meio de Prorotype não é na verdade uma propriedade, mas se comporta como uma. Essa propriedade vai estar disponível para todas as instancias de futuros Objetos.

console.log(felipe.hasOwnProperty("species"));

const roberto = new Person("Roberto", 1994);

console.log(roberto.species);

const arr = [3, 6, 5, 7, 6, 7, 8, 8];

console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");

/////////// ES6 Classes

//Class Expression
const PersonCl = class {};

//Class declaration
class PersonCL {
  constructor(firstName, birhYear) {
    this.firstName = firstName;
    this.birhYear = birhYear;
  }
  //métodos serão adicionados para o Prototype dinamicamente
  calcAge() {
    console.log(2021 - this.birhYear);
  }
}

const jessica = new PersonCL("Jessica", 1996);

jessica.calcAge();

//também podemos criar um Prototype igual como fazemos com Constructor Function
PersonCL.prototype.greet = function () {
  console.log(`Hey, ${this.firstName}`);
};

jessica.greet();

//1. Classes não são Hoisted;
//2. Classes são First-class;
//3. Classes são sempre executadas em Strict Mode;

const account = {
  owner: "Felipe",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;

console.log(account.movements);

//// Setter e Getter em ES6 Classes

class PersonCL {
  constructor(fullName, birhYear) {
    this.fullName = fullName;
    this.birhYear = birhYear;
  }
  //métodos serão adicionados para o Prototype dinamicamente
  calcAge() {
    console.log(2021 - this.birhYear);
  }

  get age() {
    return 2021 - this.birhYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      console.log("not full name");
    }
  }
}

const felipe = new PersonCL("Felipe Miranda", 1997);

console.log(felipe.age);
