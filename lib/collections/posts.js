Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
  if (Posts.find().count() === 0 ) {
    Posts.insert({
      title: "3-way payments with Stripe",
      mainParagraph: {text: "Stripe is considered to have some of the best documentation available for payment gateway systems. While that is indeed true, it can still be daunting to implement custom features for your app with Stripe. For sure, Stripe has some excellent features to make styling easy, but what if you want to host payments between users? Here I will take you step-by-step through the process."},
      paragraphs: [
        {text: "__Alright, let’s get started__. The first thing is to install the necessary gems and build the models that we’ll need for this example application. The theme to our app will be a puppy adoption center, where our site hosts sellers and takes a percentage of each transaction. The gems we will be using are featured on the right, and include `devise` for authentication, `haml-rails` for our layout, `bourbon` and `neat` for our CSS, `figaro` to store our environment variables, and the `stripe` and `omniauth-stripe-connect` gems for managing our payments through __Stripe__.", image_url: "https://raw.githubusercontent.com/tgoldenberg/Buy-A-Dog-with-Stripe/master/app/assets/images/screen1.png"},
        {text:  "Now we can create our models and controllers. On the right, you will see the command-line commands for creating our home page controller as well as our devise User model, a scaffold for the puppies resource, and last, our charges model. In our model files, we create the necessary associations, so that we can associate a puppy with a user - `puppy.user` - a charge with a buyer and seller – `charge.user` and `charge.vendor` – and likewise, – `user.received_charges` and `user.paid_charges`. Below you can see what our home page will look like when a customer clicks to buy a puppy.<br/>Now to get setup with __Stripe__, you should first create an account at <a href='https://stripe.com/'>stripe.com</a>. There you’ll get a set of keys, both for testing and for when your website is ready to launch. Here we’ll be dealing with test mode. Once you have your publishable and secret keys, you’ll want to use the `figaro` gem to encrypt that information so that it isn’t passed into your git commits and Github. Check out figaro’s documentation <a href='https://github.com/laserlemon/figaro'>here</a>.", image_url: "", gist: "79e2039eb319065c1cd6"},
        {text: "Once that is done, since we are using `devise`, we should adjust our `initializers/devise.rb` file, and create a `stripe.rb` file in our `config/initializers` folder. In out `routes.rb` file, you’ll see that we’ve configured our devise routes to include an `omniauth_callback controller`. We’ve also included a `charges#complete` controller action to allow us to create delayed payments. This way our buyers are charged only upon successful completion of the terms of service.<br/><br/>For filling in the credit card information, you will want to look at Stripe’s documentation on its Checkout page. This makes it easy to integrate at first, but as you will see, there are a few ‘gotchas’. With Stripe Checkout, we can have a website-to-customer interaction, but what if we want to host transactions between 2 users, similar to an Amazon? Or what if we don’t want to charge our customer right away, but want to keep their information and charge them after the service delivery? To the left is my attempt to integrate a solution to these issues.<br/><br/>First you will see the `omniauth_callbacks controller` file. This is to allow our users to register their Stripe accounts in order to be sellers. This is accomplished through the `omniauth_stripe_connect` gem. More information on the __Stripe Connect__ options can be found here. Once your user passes through the authorization, they will become connected accounts on your Stripe dashboard.", image_url: "", gist: "410032261ebd783b8b07"},
        {text: "Next we can see that in our charges controller, we have made a few changes. Compare this to the Stripe example here. We have seperated the `Stripe::Customer.create` and `Stripe::Charge.create` actions into two seperate controller actions - `create` and `complete`. In the create action, we save our user’s information in the charge model of our database. Once it is time to charge our customer, we call the complete action with parameters for the destination and user token. If we look in our Stripe dashboard, we will be able to see the transaction transferring money to our seller, and an application fee ( defined in the `charges#complete` action) to us.<br/><br/>Well, that’s about it for creating payments with __Stripe__. I hope you enjoyed this blog post. Please share your comments below. I am by no means an expert, and welcome corrections / improvements. Also, for the full repo, visit my Github site <a href='https://www.github.com/tgoldenberg' >here</a>. Happy coding!", image_url: "", gist: "437f58f168f9e84788af"}
      ],
      github: "https://www.github.com/tgoldenberg/Buy-A-Dog-With-Stripe",
      type: "technical",
      createdAt: new Date()
    });

    Posts.insert({
      title: "My first blog post!",
      mainParagraph: "Stay tuned here for more blog posts!",
      paragraphs: [],
      github: "",
      type: "personal",
      createdAt: new Date()
    });
  }
}

Posts.allow({
  update: function(userId, post) { return userId == "CdcFrHeRmaNkWrLAS" },
  remove: function(userId, post) { return userId == "CdcFrHeRmaNkWrLAS" },
  insert: function(userId, post) { return userId == "CdcFrHeRmaNkWrLAS" },
});


Meteor.methods({
  postInsert: function(postAttributes) {
    check(this.userId, String);

    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      commentsCount: 0,
      upvoters: [],
      votes: 0
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  },

  upvote: function(postId) {
    check(this.userId, String);
    check(postId, String);

    var affected = Posts.update({
      _id: postId,
      upvoters: {$ne: this.userId}
    }, {
      $addToSet: {upvoters: this.userId},
      $inc: {votes: 1}
    });
    if (! affected)
      throw new Meteor.Error('invalid', "You weren't able to upvote that post");
  }
});
