Template.postPage.helpers({
	makeHTML: function(string) {
		var converter = new Showdown.converter();
		return converter.makeHtml(string);
	}
})