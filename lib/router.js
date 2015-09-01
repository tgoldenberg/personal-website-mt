Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('projects'), Meteor.subscribe('tweets'), Meteor.subscribe('github')];
  }
});

Router.route('/', {
  name: 'home',
  template: 'home',
  subscriptions: function() {
    return Meteor.subscribe('projects');
  },
  data: function() {
    return {
      tweets: Tweets.find()
    }
  }
});

Router.route('/me', {name: 'me'});
Router.route('/web_development', {name: 'web'});
Router.route('/music', {name: 'music'});
Router.route('/music/2014', {name: 'music2014'});
Router.route('/music/2015', {name: 'music2015'});
Router.route('/personal_blog', {name: 'personalBlog'});
Router.route('/technical_blog', {name: 'technicalBlog'});
Router.route('/friends', {name: 'friends'});
Router.route('/speakit', {name: 'speakit'});
Router.route('/read', {name: 'read'});
Router.route('/jess', {name: 'jess'});
Router.route('/ella', {name: 'ella'});
Router.route('/resume', {name: 'resume'});
Router.route('/projects', {name: 'projects'});
Router.route('/projects/:_id', {
  name: 'projectPage',
  data: function() { return Projects.findOne(this.params._id); }
})
