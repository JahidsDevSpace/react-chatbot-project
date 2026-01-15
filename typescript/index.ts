type Pizza = {
  id: number;
  name: string;
  price: number;
}

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
}

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

let menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 8 },
];

let orderHistory: Order[] = [];

function addNewPizza(pizzaObj: Omit<Pizza, 'id'>): Pizza {
  const newPizza: Pizza = {
    id: nextPizzaId++,
    ...pizzaObj
  }
  menu.push(newPizza);
  return newPizza;
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.log(`${selectedPizza} does not exist`);
    return
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderHistory.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
  const correctOrder = orderHistory.find(
    (correctOrder) => correctOrder.id === orderId
  );
  if (!correctOrder) {
    console.log(`${orderId} was not found in the orderHistory`);
    return;
  }
  correctOrder.status = "completed";
  return correctOrder;
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
  if (typeof identifier === 'string') {
    return menu.find((pizza) => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase());
  } else if (typeof identifier === 'number') {
    return menu.find((pizza) => pizza.id === identifier);
  } else {
    throw new TypeError("Identifier must be a string or a number");
  }
}
console.log(getPizzaDetail("Margherita"));
console.log(getPizzaDetail(3));

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy sausage", price: 11 });

placeOrder("BBQ Chicken");
placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu:", menu);
console.log(`Cash in the register: ${cashInRegister}`);
console.log("Order History:", orderHistory);
