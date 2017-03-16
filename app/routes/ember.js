import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blackboard') .
    then(function(ember){
      var arr = ember.toArray('rating');
      return arr.sort(function(blackboard1,blackboard2) {
        return blackboard2.get('rating')-blackboard1.get('rating')
      });
    })



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
      this.refresh('ember');
      this.transitionTo('ember');
    },

    downVote(blackboard) {
      var n = (blackboard.get('rating'));
      n = n - 1;
      blackboard.set('rating', n);
      blackboard.save();
      this.refresh('ember');
      this.transitionTo('ember');

    }

  }
});
