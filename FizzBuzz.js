function log(a) { console.log(a); }

var a;
for (a = 1; a < 101; a++) {
  if (a % 3 === 0 && a % 5 === 0 ) {
    log("FizzBuzz");
  }
  else if (a % 5 === 0) {
    log("Buzz");
  }
  else if (a % 3 === 0) {
    log("Fizz");
  }
  else
    log(a);
}
