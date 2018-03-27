var array = [];
var n = 2;
while (n <= 100) {
    array.push(n);
    n++
}

var p = 2;
while (Math.pow(p, 2) < 100) {
    for (var i = 1; i < 100; i++) {
        if (array[i] % p == 0) {
            delete array[i];
        }
    }
    for (var i = 1; i < 100; i++) {
        if (!isNaN(array[i]) === true) {
            p = array[i];
            break;
        }
    }
}

var sum = 0;
for (i = 0; i < array.length; i++) {
    if (array[i]) {
        sum += i;
    }
}

console.log(sum);