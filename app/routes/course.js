//Julie

//only find and display the different record in course based on their id.

import Ember from 'ember';

//The course route handler use the params.course_id in the model hook to locate the single course record requested:
export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('course', params.course_id);
  },
});
