import Ember from 'ember';
import moment from 'moment';


export default Ember.Route.extend({
model() {
   return this.store.findAll('event');
 },

 actions: {
   saveEvent(params) {
     var newEvent = this.store.createRecord('event', params);
     newEvent.save();
     this.transitionTo('index');
   },
