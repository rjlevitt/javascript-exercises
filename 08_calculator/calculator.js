const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  return arr.reduce( (a, b) => a + b, 0)
};

const multiply = function(arr) {
  if(arr.length){
    return arr.reduce( (a, b) => a * b )
    
  }else{
    return 0
  }

};

const power = function(a, b) {
  return Math.pow(a,b)
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
