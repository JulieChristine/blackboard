import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('blackboard');
  },

  actions: {
    saveLink(params) {
      var newSubmission = this.store.createRecord('blackboard', params);
      newSubmission.save();
      this.transitionTo('ember');
    }
  }
});
