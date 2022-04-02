const person = {
  name: 'Carla',
  age: 24,
  address: {
    city: 'Somewhere',
    state: 'One of them',
  },
};

const personTwo = {
  age: 32,
  address: {
    city: 'Kigali',
    state: 'Rwanda Rwatubyaye',
  },
};

// destructure
const {
  name: firstName = 'Parker Addison',
  address: { city },
} = personTwo;
console.log(city);
