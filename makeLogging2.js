function work(a, b) {
	console.log(a + b);
}

function makeLogging(f, log) {
	function wrapper() {
		log.push([].slice.call(arguments));
		return f.apply(this, arguments);
	}
	return wrapper;
}

var log = []
work = makeLogging(work,log);

work(1,2);
work(4,5);

for (var i = 0; i < log.length; i++) {
	var args = log[i];
	console.log("Log: " + args.join());
}