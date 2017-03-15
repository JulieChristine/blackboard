import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('announcement');
  this.route('contact');
  this.route('student');
  this.route('staff');
  this.route('speaker');
  this.route('calendar');
  this.route('course', {path: '/course/:course_id'});
  this.route('supplementarymaterials');
  this.route('ember', function() {
    this.route('show', { path: '/:blackboard_id' });
  });
  this.route('angular');
  this.route('course-ember');
  this.route('course-angular');
  this.route('ember-introduction');
  this.route('ember-firebase');
  this.route('discussion', {path: '/discussion/:blackboard_id'});
  this.route('subject');
  this.route('introduction');
});

export default Router;
