/*
Your tasks:

1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h

2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console

3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console

4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them

Test data:

§ Data car 1: 'BMW' going at 120 km/h
§ Data car 2: 'Mercedes' going at 95 km/h

*/

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return console.log((this.speed += 10));
};
Car.prototype.brake = function () {
  return console.log((this.speed -= 5));
};

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);

// BMW.accelerate();
// BMW.accelerate();
// BMW.brake();
// BMW.accelerate();

// Mercedes.accelerate();
// Mercedes.brake();

////////////////////////////////////////////////////////////////////////////////////

/*

Your tasks:

1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)

4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.

Test data:

§ Data car 1: 'Ford' going at 120 km/h

*/

class CarCl {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  accelerate() {
    return console.log((this.speed += 10));
  }
  brake() {
    return console.log((this.speed -= 5));
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const Ford = new CarCl("Ford", 120);

console.log(Ford.speedUS);
Ford.accelerate();
// Ford.brake();
Ford.speedUS = 50;
console.log(Ford);

/*

Your tasks:

1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)

2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'

3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'

4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism

Test data:

§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

*/

const EV = function (name, speed, charge) {
  Car.call(this, name, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  console.log(
    `${
      this.name
    } is going at ${(this.speed += 20)} km/h, with a charge of ${(this.charge -= 1)}`
  );
};

const tesla = new EV("Tesla", 120, 23);

tesla.accelerate();
tesla.accelerate();
tesla.brake();

const s = new EV("s", 130, 90);

s.accelerate();
s.brake();
s.chargeBattery();
