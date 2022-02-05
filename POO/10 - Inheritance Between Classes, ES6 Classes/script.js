"use strict";

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //instance Methods
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      console.log(`${name} is not a full name!`);
    }
  }
  get fullName() {
    return this._fullName;
  }

  //Static Method
  static hey() {
    console.log("Hey there!");
  }
}

class Student extends Person {
  constructor(fullName, birthYear, course) {
    //A função Super() tem acontecer sempre primeiro em uma herança com ES6 Class
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `${2015 - this.birthYear} years old, but as a student I fell more like ${
        2015 - this.birthYear + 10
      }`
    );
  }
}

const martha = new Student("Martha Jones", 2000, "Computer Science");
