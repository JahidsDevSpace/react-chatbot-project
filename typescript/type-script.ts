let myname: string = "Bob";

let numberOfWheels: number = 4;
let isStudent: boolean = false;

type Food = string;
let favouriteFood: Food = "Pizza";

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "Alice",
  age: 42,
  isStudent: true,
};

let person2: Person = {
  name: "John",
  age: 60,
  isStudent: false,
  address: {
    street: "456 Elm St",
    city: "Dhaka",
    country: "Bangladesh",
  },
};

function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

displayInfo(person2);

let people: Person[] = [person1, person2];

// let ages: number[] = [25, 51, 22, '21'];
// let names: string[] = ['Alice', 'Bob', 42];

let firstName: "Bob" = "Bob";
const lastName: "Jerry" = "Jerry";

type UserRole = "admin" | "member" | "guest" | "contributor";

type User = {
  id: number;
  userName: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>;
let nextUserId = 1;

const users: User[] = [
  {
    id: nextUserId++,
    userName: "Alice",
    role: "admin",
  },
  {
    id: nextUserId++,
    userName: "Bob",
    role: "contributor",
  }
];

function fetchUserDetails(userName: string): User {
  const user = users.find(user => user.userName === userName);
  if (!user) {
    throw new Error(`User with username ${userName} not found`);
  }
  return user;
}
console.log(fetchUserDetails("Alice"));

function updateUser(id: number, updates: UpdatedUser) {
  const foundUser = users.find(user => user.id === id);
  if (!foundUser) {
    throw new Error(`User with id ${id} not found`);
  }
  Object.assign(foundUser, updates);
}

function addNewUser(newUser: Omit<User, 'id'>): User {
  const user: User = {
    id: nextUserId++,
    ...newUser
  };
  users.push(user);
  return user;
}

updateUser(1, {userName: 'new_alice'});
console.log(users);

addNewUser({ userName: 'joe_kerry', role: 'member' })
console.log(users);

const gameScores = [14, 24, 19, 31, 17];
const favouriteThings = ['coding', 'reading', 'reading', 'traveling'];
const voters = [{name: 'Alice', age: 30}, {name: 'Bob', age: 25}];

function getLastItem<Type>(array: Type[]): Type | undefined {
  return array[array.length - 1];
}

console.log(getLastItem(gameScores));
console.log(getLastItem(favouriteThings));
console.log(getLastItem(voters));