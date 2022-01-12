"use strict";

const booking1 = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking2 = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking2);
  booking1.push(booking2);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);

//////////////////////////////////////////////////////////////////////////////

const flight = "LH234";
const felipe = {
  name: "Felipe Miranda",
  passport: 24558445266,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = "LH999"), (passenger.name = "Mr. " + passenger.name);

  if (passenger.passport === 24558445266) {
    console.log("Check in");
  } else {
    console.log("Wrong passport");
  }
};

checkIn(flight, felipe);
console.log(flight);
console.log(felipe);

const newPassport = function (person) {
  console.log((person.passport = Math.trunc(Math.random() * 100000000000)));
};

newPassport(felipe);
checkIn(flight, felipe);
