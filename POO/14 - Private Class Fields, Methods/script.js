"use strict";

//Public fields
//Private fields

//Publick methods
//Private methods

class Account {
  //Esse parte do código se chama Public Fields
  locale = navigator.language;

  /////////////////////////////////////////////////

  //Essa parte é a forma de privar uma propriedade
  #movements = [];
  #pin;

  //Usamos o hash para tornar a propriedade realmente privada

  //////////////////////////////////////////////////////
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  /////////////////////////////////////////////////////////////


  //Public Methods
  //Public Interfaces
  getMovements() {
    return this.#movements;
  }

  deposit(value) {
    this.#movements.push(value);
  }
  withdraw(value) {
    this.deposit(-value);
  }
  requestLoan(value) {
    if (this.approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    }
  }

  /////////////////////////////////////////////
  //Private Methods
  #approveLoan(value) {
    return true;
  }
  //usamos hash também
}

const acc1 = new Account("Felipe", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
