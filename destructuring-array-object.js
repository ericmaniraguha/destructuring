// destructuring node js

// assign variables from objects
var myObj = { x: 15.5, y: 11.7, z: 6.45 };
// var x = myObj.x; //15.5
// var z = myObj.z; //11.7
// var y = myObj.y; //6.45

const { x, y, z } = myObj;
console.log(x);
const { x: a, y: b, z: c } = myObj;
console.log(b);

// Assign variables from nested object
const nest = {
  start: { x: 5, y: 8 },
  end: { x: 15, y: -15 },
};
const {
  start: { x: startX, y: startY },
} = nest;
console.log(startX);

// Assign variables from arrays
const [q, , , , , r] = [11, 15, 22, 20, 56, 85, 15, 60];
console.log(q, r);

// Rest operator to reassign array element
const [p, o, ...rest] = [11, 15, 22, 20, 56, 85, 15, 60];
console.log(o, p);
console.log(rest);

// Pass an object as function's parameters
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these varibles
};

// ===>Destructured object
const profileDestructured = (name, age, nationality, location) => {
  // do something with these varibles
};
