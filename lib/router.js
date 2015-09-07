Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('projects'), Meteor.subscribe('posts')];
  }
});

Router.route('/', {name: 'home'});
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
});
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});
