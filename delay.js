function delay(f, ms) {
	return function() {
		var savedThis = this;
		var savedArgs = arguments;

		setTimeout(function() {
			f.apply(savedThis, savedArgs);
		}, ms);
	};
}

function f(x) {
	console.log(x);
}

var f1000 = delay(f,1000);
var f1500 = delay(f, 1500);

f1000("test");
f1500("test2");