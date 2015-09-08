Template.postEdit.helpers({
	rows: function(paragraph){ 
		var rows = paragraph.split(" ").length / 21;
		return Math.floor(rows);
	}
});

Template.postEdit.events({
	'submit #edit-post-form': function(e) {
		console.log("SUBMIT");
		e.preventDefault();
		var currentPostId = this._id;
		var title = $('[name=title]').val();
		var type = $('[name=type]').val();
		var urls = $('.paragraph-form [name=paragraph-url]').map(function(idx, myDiv) {
			return myDiv.value;
		}); 
		var gists = $('.paragraph-form [name=paragraph-gist]').map(function(idx, myDiv) {
			return myDiv.value;
		}); 
		var texts = $('.paragraph-form [name=paragraph-text]').map(function(idx, myDiv) {
			return myDiv.value;
		});

		var formLength = texts.length;

		var paragraphs = [];

		for(i=0; i<formLength; i++) {
			var para = {
				text: texts[i],
				image_url: urls[i],
				gist: gists[i]
			};
			paragraphs.push(para);
		}
		console.log(paragraphs);

		var postProperties = {
			title: $(e.target).find('[name=title]').val(),
			type: $(e.target).find('[name=type]').val(),
			paragraphs: paragraphs
		}
		Posts.update(currentPostId, {$set: postProperties}, function(error) {
	      if (error) {
	        alert(error.reason);
	      } else {
	        Router.go('postPage', {_id: currentPostId});
	      }
	    });
	}
})