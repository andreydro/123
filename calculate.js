var array = [];

while (true) {
    var input = prompt("Введите число", 0);
    if (input === "" || input === null || isNaN(input)) break;
    array.push(+input);
}

var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum += array[i];
}

alert(sum);