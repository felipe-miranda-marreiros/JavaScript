///////////////////////////////////////
// Introduction to NPM
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

import { cloneDeep } from "lodash-es";
import add, { cart } from "./shoppingCart.js";

add("pizza", 2);
add("bread", 5);
add("apples", 4);

console.log(cart);

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
