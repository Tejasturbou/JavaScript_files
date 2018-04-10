function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (target === str.substring(str.length - target.length)) {
    str = true;
  } else {
    str = false;
  }
  return str;
}

confirmEnding("Bastian", "n");