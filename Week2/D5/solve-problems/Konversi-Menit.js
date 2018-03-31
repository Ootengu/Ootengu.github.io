function konversiMenit(menit) {

  // kodenya disini
  var hours = Math.floor(num / 60);
  var minutes = num % 60;

  return hours + ':' + minutes;

}
console.log(konversimenit(63));
console.log(konversiMenit(124)); 
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));