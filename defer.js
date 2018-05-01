Function.prototype.defer = function(ms) {
    var f = this;
    return function() {
        var args = arguments,
            context = this;
        setTimeout(function() {
            f.apply(context, args);
        }, ms);
    }
}

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2);