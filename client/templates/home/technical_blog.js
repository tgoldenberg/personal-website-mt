Template.technicalBlog.helpers({
  posts: function() {return Posts.find({type: "technical"}); }
});
