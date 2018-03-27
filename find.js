function find(arr, value) {
    if (arr.indexOf) {
        return arr.indexOf(value);
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
}

arr = ["test", 2, 1.5, false];

console.log(find(arr, "test"));
console.log(find(arr, 2));
console.log(find(arr, 1.5));
console.log(find(arr, 0));