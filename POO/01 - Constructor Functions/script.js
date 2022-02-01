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
