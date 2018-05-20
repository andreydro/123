Object.defineProperty(window, 'pageYOffset', {
	get: function() {
		return document.documentElement.scollTop;
	}
});

alert(window.pageYOffset);