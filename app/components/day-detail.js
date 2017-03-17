import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyEvent(event) {

        this.sendAction('destroyEvent', event);
      }
    }
  });
