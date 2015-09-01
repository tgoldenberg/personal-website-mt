Template.home.helpers({
	tweets: function() {
		return Tweets.find().map(function(tweet){return tweet[0]});
	},
	github: function() {
		return Github.find({}, {sort: {updatedAt: -1}, limit: 3});
	}
})
