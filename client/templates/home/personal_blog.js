Template.personalBlog.helpers({
  posts: function() {
    return Posts.find({type: "personal"});
  }
});
