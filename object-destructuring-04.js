const person = {
  name: 'Carla',
  age: 24,
  address: {
    city: 'Somewhere',
    state: 'One of them',
  },
};

const personTwo = {
  favoriteFood: 'milk',
  name: 'Parker',
  age: 32,
};

function printUser({ name, age, favoriteFood = 'banana' }) {
  console.log(`Names is ${name}. With Age of ${age}. Food is ${favoriteFood}`);
}
printUser(personTwo);
printUser(person);
