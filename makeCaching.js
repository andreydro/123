function f(x) {
	return Math.random()*x;
}

function makeCaching(f) {
	var cache = {};

	return function(x) {
		if (!(x in cache)) {
			cache[x] = f.call(this, x);
		}
		return cache[x];
	};
}

f = makeCaching(f);

var a = f(1);
var b = f(1);
console.log(a == b);
b = f(2);
console.log(a == b);