Template.home.helpers({
	tweets: function() {
		return Tweets.find().map(function(tweet){return tweet[0]});
	}
})