const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  let sum = 0;
  for (i = 0 ; i < array.length ; i++) {
    sum += array[i];
  }
  return sum;

};

const multiply = function(array) {
  let product = 1;
  for (i = 0 ; i < array.length ; i++) {
    product *= array[i];
  }
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }
  let factorial = 1;
  for (i = number ; i > 0 ; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
