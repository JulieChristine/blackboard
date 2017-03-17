import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
return this.store.findRecord('day', params.day_id);

  },
  actions: {
    saveEvent(params) {
      var newEvent = this.store.createRecord('event', params);
      var day = params.day;
      day.get('events').addObject(newEvent);
      newEvent.save().then(function() {
       return day.save();
     });
     this.transitionTo('day',day);
   },
   destroyEvent(event) {
        event.destroyRecord();
        this.transitionTo('day');
  }

}

 });
