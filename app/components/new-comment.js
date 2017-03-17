import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  saveAnswer() {
    var params = {
      comment: this.get('comment'),
      author: this.get('author'),
      blackboard: this.get('discussion')
    };
    debugger;
    this.sendAction('saveAnswer', params);
  }
  }
});
