console.log("Test start");
setTimeout(() => console.log("0 sec timer"), 0);

//Promise abaixo é uma forma tê-la em success
Promise.resolve("Resolved promise 1").then((response) => console.log(response));

//A promise abaixo fará que o SetTimeout acima demore mais ainda a aparecer
Promise.resolve("Resolved promise 2").then((response) => {
  for (let i = 0; i < 20; i++) {
    console.log(response);
  }
});
console.log("Test end");
