function Menu(options) {
	options = Object.create(options);
	options.width = 300;

	console.log("width: " + options.width);
	console.log("height: " + options.height);
}

var options = {
	width: 100,
	height: 200
};

var menu = new Menu(options);

console.log("original width: " + options.width);
console.log("original height: " + options.height);