import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upVote(blackboard) {
      this.sendAction('upVote', blackboard);
    },
     downVote(blackboard) {
       this.sendAction('downVote', blackboard);
     }
  }
});
