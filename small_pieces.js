// average number

function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(2, 5));

// sum of numbers

function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + 1;
    }
    return sum;
}

console.log(sumTo(100));

// factorial

function factorial(n) {
    if (n == 1) return 1;
    return n + factorial(n - 1);
}

alert(factorial(5));

//fibonachi numbers

function fib(n) {
    var x = 0,
        y = 1;
    for (var i = 0; i != n; i++) {
        x += y;
        y = x - y;
    }
    return x;
};

console.log(fib(7));