function titleCase(str) {
  str = str.toLowerCase().split(' ');
  var array = [];
  for (var i = 0; i < str.length; i++) {
    array[i] = str[i].charAt(0).toUpperCase();
    array[i] += str[i].slice(1);
  }
  str = array.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
