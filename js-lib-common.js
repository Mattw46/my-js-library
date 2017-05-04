/*
 My personal JS library
 Commonly used functions to be imported to applications
*/

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// factorialize a Number
function factorialize(num) {
  var factorial = 1;
  var counter = 2;
  while (counter <= num) {
    factorial *= counter;
    counter++;
  }
  return factorial;
}
