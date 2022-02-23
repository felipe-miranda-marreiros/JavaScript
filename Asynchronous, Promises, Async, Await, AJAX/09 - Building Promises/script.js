const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening...");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN!");
    } else {
      reject(new Error("You lost your money!"));
    }
  }, 2000);
});

lotteryPromise
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I waited for 1 seconde"));

// Outra forma de construir Promises
Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem")).catch((x) => console.log(x));
