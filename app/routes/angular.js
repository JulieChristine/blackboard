import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('angularsupp');
  },

  actions: {
    saveLink(params) {
      var newSubmission = this.store.createRecord('angularsupp', params);
      newSubmission.save();
      this.transitionTo('angular');
    }
  }
  });
