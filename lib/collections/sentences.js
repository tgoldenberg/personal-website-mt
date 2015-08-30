Sentences = new Mongo.Collection('sentences');
Sentences.allow({
  update: function(userId, sentence) { return true; },
  remove: function(userId, sentence) { return true; },
  insert: function(userId, sentence) { return true;}
});
