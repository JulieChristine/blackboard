import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  saveAnswer() {
    var params = {
      comment: this.get('comment'),
      author: this.get('author'),
      blackboard: this.get('discussion')
    };
    this.sendAction('saveAnswer', params);
  }
  }
});
