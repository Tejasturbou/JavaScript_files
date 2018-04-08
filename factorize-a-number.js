function factorialize(num) {
  var value = 1;
  while (num > 0) {
    value = value * (num);
    num -= 1;
  }
  return value;
}

factorialize(5);