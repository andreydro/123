(function() {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function(css) {
			var node = this;

			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();