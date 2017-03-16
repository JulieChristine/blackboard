import Ember from 'ember';

    export default Ember.Route.extend({
      model() {
    return Ember.RSVP.hash({
      days: this.store.findAll('day'),
      events: this.store.findAll('event')
      });
      },
      actions: {
        saveEvent(params) {
          var newEvent = this.store.createRecord('event', params);
          newEvent.save();
          this.transitionTo('calendar');
        }
      }
    });
