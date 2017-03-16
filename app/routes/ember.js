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
    },
    upVote(blackboard) {
      var n = (blackboard.get('rating'));
      n = n + 1;
      blackboard.set('rating', n);
      blackboard.save();
      this.transitionTo('ember');
    },

    downVote(blackboard) {
      var n = blackboard.get('rating');
      n = n - 1;
      blackboard.set('rating', n);
      blackboard.save();
      this.transitionTo('ember');

    }

  }
});
