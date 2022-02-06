"use strict";

const Person = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const felipe = Object.create(Person);

felipe.firstName = "Felipe";
felipe.birthYear = 1997;

//Student vai herdar as propriedades e métodos da Classe Person
const Student = Object.create(Person);

//Assim podemos vincular usando a função Call() para setar o This Keyword para o Student
Student.init = function (firstName, birthYear, course) {
  Person.init.call(this, firstName, birthYear);
  this.course = course;
};

//Usando o conceito de polimorfismo
Student.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const amanda = Object.create(Student);

amanda.init("Amanda", 1996, "Computer Science");
amanda.introduce();
amanda.calcAge();
