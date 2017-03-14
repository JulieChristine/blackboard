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
});

export default Router;
