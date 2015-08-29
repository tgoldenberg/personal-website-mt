Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('posts')];
  }
});

Router.route('/', {
  name: 'home',
  template: 'home',
  subscriptions: function() {
    return Meteor.subscribe('posts');
  },
  posts: function() {
    return Posts.find();
  },
  data: function() {
    return {
      posts: this.posts(),
      ready: this.postsSub.ready,
    }
  }
});
