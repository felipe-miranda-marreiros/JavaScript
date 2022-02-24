//Importing
import { addToCart } from "./shoppingCart.js";

addToCart("bread", 5);
console.log(price, qt);

import * as ShoppingCart from "./shoppingCart.js";
//Modules com import são hoisted
//Todos os Modules são executados em Strict Mode



console.log("Importing module");
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

//Default Export
import add from "./shoppingCart.js";
add("pizza", 2);
