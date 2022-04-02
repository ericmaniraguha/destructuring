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
  favoriteFood: 'Rice',
};

// destructure
const personThree = { ...person, ...personTwo };
console.log(personThree);
