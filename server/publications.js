Meteor.publish('sentences', function(options) {
  return Sentences.find();
});
