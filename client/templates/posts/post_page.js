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
	},
	isAdmin: function() {
		return Meteor.userId() == "f8eAFHhRX96oi9FRN";
	}
});

Template.postPage.events({
	'click #post-delete': function(e) {
		e.preventDefault();
		var postId = this._id;
		Posts.remove(postId, function(error) {
			if (error) {
	        alert(error.reason);
	      } else {
	        Router.go('home');
	      }
		});
	}
})