function palindrome(kata) {
  var msg = '';
  for (var i = kata.length-1; i >= 0; i--) {
    msg = msg + kata[i];
  }
  
  return msg === kata ? true : false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('katak')); 
console.log(palindrome('blanket'));
console.log(palindrome('civic')); 
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));