import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('supplementarymaterials');
  this.route('ember', {path: '/ember/:embersupp_id'});
});

export default Router;
