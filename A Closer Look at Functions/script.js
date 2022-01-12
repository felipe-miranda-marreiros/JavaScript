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
