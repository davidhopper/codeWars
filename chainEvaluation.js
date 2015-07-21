Number.prototype.add = function(int) {
  return this.valueOf() + int;
};

Number.prototype.subtract = function(int) {
  return this.valueOf() - int;
};

Number.prototype.multiply = function(int) {
  return this.valueOf() * int;
};

Number.prototype.divide = function(int) {
  return this.valueOf() / int;
};

Number.prototype.square = function() {
  return this.valueOf() * this.valueOf();
};

console.log((3).add(2)); // 5
console.log((5).subtract(1)); // 4
console.log((3).add(2).subtract(1)); // 4
console.log((3).add(5).multiply(2).subtract(2).divide(2).square()); // 49