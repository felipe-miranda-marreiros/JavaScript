"use strict";

"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;

    //protejando essa Array para ninguém poder manipular
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //Podemos usar métodos diretamente do escopoe de uma Classe, isso é chamado de Public Interface

  //fazendo uma função que dá acesso a movements do lado de fora da classe
  getMovements() {
    return this._movements;
  }

  deposit(value) {
    this._movements.push(value);
  }
  withdraw(value) {
    this.deposit(-value);
  }
  _approveLoan(value) {
    return true;
  }
  requestLoan(value) {
    if (this.approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account("Felipe", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);
