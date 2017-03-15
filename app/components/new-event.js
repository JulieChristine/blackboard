import Ember from 'ember';

export default Ember.Component.extend({
  addNewEvent: false,
actions: {
    eventFormShow() {
    this.set('addNewEvent', true);
  },

  saveEvent() {
    var params = {
      creator: this.get('creator'),
      time: this.get('time'),
      information: this.get('information')
    };
    this.set('addNewEvent', false);
    this.sendAction('saveEvent', params);
  }
}
});
