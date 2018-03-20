function fubBinet(n) {
    var f = (1 + Math.sqrt(5)) / 2;
    var binet = (Math.pow(f, n)) / Math.sqrt(5);
    return binet;
}
console.log(fubBinet(77));