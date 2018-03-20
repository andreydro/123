function getDecimal(n) {
    var num = +n - +(n ^ 0);
    if (num < 0) {
        return +(-(num).toFixed(10));
    } else {
        return +num.toFixed(10);
    }
};

alert(getDecimal(12.345)); // 0.345
alert(getDecimal(1.2)); // 0.2
alert(getDecimal(-1.2)); // 0.2