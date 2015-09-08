Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();
		console.log($(e.target));
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

		var post = {
			title: $(e.target).find('[name=title]').val(),
			type: $(e.target).find('[name=type]').val(),
			paragraphs: paragraphs
		};
		Meteor.call('postInsert', post, function(error, result) {
	      if (error) {
	        alert(error);
	      } else {
		     Router.go('postPage', { _id: result._id });
	      }
	    });
		
	},
	'click #add-paragraph': function(e) {
		e.preventDefault();
		var partial; 
		partial = '<div class="paragraph-form">' + 
						'<p>Paragraph</p>' + 
						'<textarea name="paragraph-text" id="" rows="6"></textarea>' + 
						'<p>Image URL:</p>' +
						'<input name="paragraph-url" type="text">' +
						'<p>Gist:</p>' +
						'<input name="paragraph-gist" type="text">' +
					'</div>'
		$('.paragraphs').append(partial);
	}
})

