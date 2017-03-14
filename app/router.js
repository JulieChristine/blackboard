import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('student');
  this.route('staff');
  this.route('speaker');
  this.route('calendar');
});

export default Router;
