"use strict";

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
      <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDiplaySummary = function (account) {
  const incomes = account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov);

  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .reduce((acc, int) => acc + int);

  labelSumInterest.textContent = `${interest}€`;
};

//criando userName para os usuários
const createUsernames = function (accounts) {
  accounts.forEach((acc) => {
    //criando nova propriedade
    acc.userName = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);

  //Display Summmary
  calcDiplaySummary(acc);
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${acc.balance} EUR`;
};

//Event Handler
let currentAccount;

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 1;

    //Clear Inputs Fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const reciverAccount = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    amount > 0 &&
    reciverAccount &&
    currentAccount.balance >= amount &&
    reciverAccount?.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-amount);
    reciverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount / 10)
  ) {
    //add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);

    inputLoanAmount.value = "";
  }
});

btnClose.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //encontrar o index da conta
    const index = accounts.findIndex(
      (accounts) => accounts.userName === currentAccount.userName
    );
    //deletar a conta
    accounts.splice(index, 1);

    //esconder o App
    containerApp.style.opacity = 0;
  }

  //resetando valores
  inputCloseUsername.value = inputClosePin.value = "";
});

//Flat
const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

//FlatMap

const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

// const owners = ["Jonas", "Zach", "Adam", "Martha"];

// console.log(owners.sort());

// const movements = account1.movements;

// // return < 0, A, B (Keep order)
// // return > 0, B, A (switch order)

// // Ascending
// movements.sort((a, b) => b - a);
// console.log(movements);

// //Descending
// movements.sort((a, b) => a - b);

// console.log(movements);

let sortedState = false;

btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sortedState);
  sortedState = !sortedState;
});
