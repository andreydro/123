function filterRange(arr, a, b) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
console.log(filtered);