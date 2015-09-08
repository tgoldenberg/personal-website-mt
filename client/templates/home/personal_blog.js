Template.personalBlog.helpers({
  posts: function() {
    return Posts.find({type: "personal"}, {sort: {createdAt: 1}});
  },
  noComments: function() {
	return this.commentsCount == undefined;
  }
});
