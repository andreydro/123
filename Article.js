function Article() {
	this.created = new Date();

  Article.count++
  Article.last = this.created;
}

Article.count = 0

Article.showStats = function() {
	console.log("Total: " + this.count + ", Last: " + this.last );
};

new Article();
new Article();

Article.showStats();

new Article();

Article.showStats();