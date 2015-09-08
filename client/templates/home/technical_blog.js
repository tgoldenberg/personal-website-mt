Template.technicalBlog.helpers({
  posts: function() {
  	return Posts.find({type: "technical"}, {sort: {createdAt: 1}}); 
  	},
  isAdmin: function() {
		return Meteor.userId() == "6TXMpjPSbWfcqevAo";
	},
	noComments: function() {
		return this.commentsCount == undefined;
	}
});
