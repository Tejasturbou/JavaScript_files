function findLongestWord(str) {
  str = str.split(' ');
  var largeCount = 0;
  var count;
  for (var i = 0; i < str.length; i++) {
    count = str[i].length;
    if (count > largeCount) {
      largeCount = count;
    }
  }
  return largeCount;
}

findLongestWord("The quick brown fox jumped over the lazy dog");