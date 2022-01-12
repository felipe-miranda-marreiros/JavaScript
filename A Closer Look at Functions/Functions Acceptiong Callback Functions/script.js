"use strict";

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperWords = function (str) {
  const [first] = str.split();

  return [first.toUpperCase()].join(" ");
};

//higher-order function

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);

  console.log(`Transformed string: ${fn(str)}`);

  console.log(`transformed by: ${fn.name}`);
};

transformer("JavaScript is the best", upperWords);
transformer("JavaScript is the best", oneWord);
