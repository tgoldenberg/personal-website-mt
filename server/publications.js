Meteor.publish('projects', function(options) {
  return Projects.find();
});

Meteor.publish('posts', function() {
  return Posts.find();
});

Twit = Meteor.npmRequire('twit');
Future = Meteor.npmRequire('fibers/future');

var twit = new Twit({
    consumer_key: Meteor.settings.consumerKey,
    consumer_secret: Meteor.settings.consumerSecret,
    access_token: Meteor.settings.accessToken,
    access_token_secret: Meteor.settings.accessSecret
});

var github = new GitHub({
    version: "3.0.0", // required
    protocol: "https",
    host: "api.github.com",
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
    }
});
github.authenticate({
    type: "basic",
    username: "tgoldenberg",
    password: Meteor.settings.github
});

Meteor.publish('github', function(query) {
  // console.log(github.repos);
  var self = this;
  try {
    github.repos.getFromUser({user: 'tgoldenberg'}, function(err, res) {
    // console.log(res)
      res.forEach(function(repo) {
        self.added('github', Random.id(), {name: repo.name, updatedAt: repo.updated_at, url: repo.html_url, description: repo.description});
      });
	    self.ready();
    });
  } catch(error) {
    console.log(error);
  }
})

Meteor.publish('tweets', function(query) {
  var self = this;
  console.log("HI tweets");
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
