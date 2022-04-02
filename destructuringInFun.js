function sumAndMult(a, b) {
  return [a + b, a * b];
}
// const array = sumAndMult(2.5, 48);
// console.log(array); //[ 50.5, 120 ]

const [sum, mult, div = 'no division'] = sumAndMult(14, 10);
console.log(sum);
console.log(mult);
console.log(div);
