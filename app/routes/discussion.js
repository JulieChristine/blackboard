import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blackboard', params.blackboard_id);
  },
  actions: {
saveAnswer(params) {
  var newAnswer = this.store.createRecord('discussion', params);
  var blackboard = params.blackboard;
  debugger;
  blackboard.get('discussions').addObject(newAnswer);
  newAnswer.save().then(function() {
    return blackboard.save();
  })
}
}
});
