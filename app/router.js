import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('course');
  this.route('supplementarymaterials');
  this.route('ember');
  this.route('angular');
  this.route('course-ember');
  this.route('course-angular');
  this.route('ember-introduction');
  this.route('ember-firebase');
});

export default Router;
