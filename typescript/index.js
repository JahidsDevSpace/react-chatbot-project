const menu = [
  { name: 'Margherita', price: 8 },
  { name: 'Pepperoni', price: 10 },
  { name: 'Hawaiian', price: 10 },
  { name: 'Veggie', price: 8 },
]

let cashInRegister = 100;
let orderQueue = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj)
};

function placeOrder(pizzaName) {
  const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price
  const newOrder = {id: nextOrderId++, pizza: selectedPizza, status: 'ordered'}
  orderQueue.push(newOrder)
  return newOrder;
};

function completeOrder(orderId) {
  const correctOrder = orderQueue.find(correctOrder => correctOrder.id === orderId)
  if (!correctOrder) {
    console.log(`${orderId} was not found in the orderHistory`);
    return;
  }
  correctOrder.status = 'completed'
  return correctOrder;
};

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: 'BBQ Chicken', cost: 12 });
addNewPizza({ name: 'Spicy sausage', cost: 11 });

placeOrder('BBQ Chicken')
completeOrder(1)

console.log('Menu:', menu);
console.log(`Cash in the register: ${cashInRegister}`);
console.log('Order Queue:', orderQueue);
