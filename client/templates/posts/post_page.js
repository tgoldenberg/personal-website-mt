Template.postPage.helpers({
	makeHTML: function(string) {
		var converter = new Showdown.converter();
		return converter.makeHtml(string);
	},
	gistExists: function(paragraph) {
		return paragraph.gist && paragraph.gist != "";
	},
	imageUrlExists: function(paragraph) {
		return paragraph.image_url && paragraph.image_url != "";
	},
	hasExtras: function(paragraph) {
		return (paragraph.image_url && paragraph.image_url != "") || (paragraph.gist && paragraph.gist != "");
	}
})