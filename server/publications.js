Meteor.publish('projects', function(options) {
  return Projects.find();
});

Twit = Meteor.npmRequire('twit'),
Future = Meteor.npmRequire('fibers/future');

var twit = new Twit({
    consumer_key: process.env["TWITTER_CONSUMER_KEY"],
    consumer_secret: process.env["TWITTER_CONSUMER_SECRET"],
    access_token: process.env["TWITTER_ACCESS_TOKEN"],
    access_token_secret: process.env["TWITTER_ACCESS_SECRET"]
});


Meteor.publish('tweets', function(query) {  
  var self = this;
  try {
    twit.get('statuses/user_timeline', { q: 'user_id 2894299203', count: 3 }, function(response, data, err) {
    	// console.log("data", data.map(function(tweet){return tweet.text}));
    	var response = data.map(function(tweet){return [tweet.text]});
    
	    _.each(response, function(item) {
	      console.log(item);

	      self.added('tweets', Random.id(), item);
	    });

	    self.ready();

    });
  } catch(error) {
    console.log(error);
  }
});
