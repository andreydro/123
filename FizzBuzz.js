function log(a) { console.log(a); }

var a;
for (a = 1; a < 101; a++) {
  while (a % 3 === 0 && a % 5 === 0 ) {
    log("FizzBuzz");
    break;
  }
  while (a % 5 === 0) {
    log("Buzz");
    break;
  }
  while (a % 3 === 0) {
    log("Fizz");
    break;
  }
  while (a % 3 != 0 && a % 5 != 0) {
    log(a);
    break;
  }
}