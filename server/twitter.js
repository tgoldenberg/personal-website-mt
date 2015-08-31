
Twit = Meteor.npmRequire('twit'),
Future = Meteor.npmRequire('fibers/future');

var twit = new Twit({
    consumer_key: process.env["TWITTER_CONSUMER_KEY"],
    consumer_secret: process.env["TWITTER_CONSUMER_SECRET"],
    access_token: process.env["TWITTER_ACCESS_TOKEN"],
    access_token_secret: process.env["TWITTER_ACCESS_SECRET"]
});


function getTweets() {
    twit.get('statuses/user_timeline', { q: 'user_id 2894299203', count: 3 }, function(err, data, response) {
    tweets = data.map(function(tweet) {return tweet.text;});
    console.log(tweets);
    });
}
