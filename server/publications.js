Meteor.publish('projects', function(options) {
  return Projects.find();
});
