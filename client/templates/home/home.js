Template.home.helpers({
	tweets: function() {
		var tweets = Tweets.find({}, {sort: {createdAt: -1}})
		return tweets;
	},
	github: function() {
		return Github.find({}, {sort: {updatedAt: -1}, limit: 3});
	},
	posts: function() {
		return Posts.find({}, {sort: {createdAt: 1}, limit: 2});
	}
})
if (Meteor.isClient) {
	Meteor.startup(function() {
		Meteor.subscribe('tweets');
		Meteor.subscribe('github');
	});
}
