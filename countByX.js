function countBy(x, n) {
  var z = [];
  var counter = x;

  for (var i = 0; i < n; i++) {
    z.push(x);
    x += counter;
  }

  return z;
};