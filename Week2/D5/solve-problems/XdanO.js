function xo(str) {
  var res = str.toLowerCase();
  // kodenya disini
  var splitString = res.split("");
  var x = 0;
  var o = 0;
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i] === 'o') {
      o++;
    } else if (splitString[i] === 'x') {
      x++;
    }
  }

  if(x == o){
    return true;
  } else {
    return false;
  }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));