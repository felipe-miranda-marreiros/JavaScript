"use strict";

const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const felipe = Object.create(PersonProto);

felipe.name = "Felipe";
felipe.birthYear = 1997;

felipe.calcAge();

////////////////

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1982);
sarah.calcAge();
