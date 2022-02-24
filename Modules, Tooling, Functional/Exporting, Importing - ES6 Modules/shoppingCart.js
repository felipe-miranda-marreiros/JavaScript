//Exporting

console.log("Exporting module");

//Variáveis declaradas em um módulo são privadas. Ou seja, só pertecem aquele módulo.
const shoppingCost = 10;
const cart = [];

//Para exportar um módulo, necessário que o código seja top-level
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

////////////////////////////////////////////////////

//Default Exports
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
