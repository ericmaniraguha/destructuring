const alph = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
];
const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

// const a = alph[0];
// const b = alph[1];

// destructuring

// const [a, b, v] = alph;
const [a, , , b, ...rest] = alph;
console.log(b);
console.log(a);
console.log(rest);

// combine two arrays together
const newArr = [...alph, ...num];
console.log(newArr);

// combine two array using concat function
const newArray = alph.concat(num);
console.log(newArray);
