const numbers = [12, 6, 99, 34, 51, 83, 35, 95];

const product = numbers.reduce(function(accumulator, currentValue) {
  return accumulator * currentValue;
});

console.log(product);