Template.technicalBlog.helpers({
  posts: function() {
  	return Posts.find({type: "technical"}, {sort: {createdAt: 1}}); 
  	},
  isAdmin: function() {
		return Meteor.userId() == "f8eAFHhRX96oi9FRN";
	}	
});
