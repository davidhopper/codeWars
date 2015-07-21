function sumOfN(n) {
  // insert here your code
  var result = [0];

  for(var i = 1; i <= Math.abs(n); i++) {
    n >= 0 ? result.push(result[i-1]+i) : result.push(result[i-1]-i);    
  }

  return result;
};

console.log(sumOfN(5));
console.log(sumOfN(-5));
console.log(sumOfN(7));