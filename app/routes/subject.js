//Julie

import Ember from 'ember';

//find all the records of the type course in the store, and return them to our application.
export default Ember.Route.extend({
  model(){
    return this.store.findRecord('course');
  }
});
