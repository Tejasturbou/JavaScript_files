function palindrome(str) {
  // Good luck!
  var small = str.toLowerCase();
  str = small.replace(/[^0-9a-z]/gi,'');
  var oppositeOrder = str.split('').reverse().join('');
  return (str === oppositeOrder) ? true : false;
}



palindrome("eye");