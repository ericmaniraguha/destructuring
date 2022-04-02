const person = {
  name: 'Carla',
  age: 24,
  address: {
    city: 'Somewhere',
    state: 'One of them',
  },
};

const personTwo = {
  name: 'Parker',
  age: 32,
  address: {
    city: 'Kigali',
    state: 'Rwanda Rwatubyaye',
  },
};

// destructure
const {
  name: firstName = 'Parker Addison',
  age,
  favoriteFood = 'Beaf Meat',
} = personTwo;
console.log(firstName, age);
console.log(age);
console.log(favoriteFood);
