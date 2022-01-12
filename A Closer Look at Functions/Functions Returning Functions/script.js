"use strict";

//tradicional
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");

greeterHey("Felipe");
greeterHey("Steven");

//Nova forma
const greetFnA = (greeting) => (name) =>
  console.log(`${greeting.toUpperCase()} ${name}`);

greetFnA("Hey")("Felipe");
