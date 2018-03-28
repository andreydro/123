function makeBuffer() {
    var text = "";

    function buffer(piece) {
        if (arguments.length == 0) {
            return text;
        }
        text += piece;
    }

    buffer.clear = function() {
        text = "";
    }

    return buffer;
}

var buffer = makeBuffer();

buffer("Замыкания");
buffer(" Использовать");
buffer(" Нужно!");
console.log(buffer());
buffer.clear();
console.log(buffer());

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

console.log(buffer2());