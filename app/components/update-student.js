import Ember from 'ember';

export default Ember.Component.extend({
  updateStudentForm: false,
  actions: {
    updateStudentForm() {
      this.set('updateStudentForm', true);
    },
    update(student) {
      var params = {
        name: this.get('name'),
        info: this.get('info'),
      };
      this.set('updateStudentForm', false);
      this.sendAction('update', student, params);
    }
  }
});
