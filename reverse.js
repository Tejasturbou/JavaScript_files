function reverseString(str) {
  var word = str.split('');
  word.reverse();
  word.join('');	
  return word;
}

reverseString("hello");
