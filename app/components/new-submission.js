import Ember from 'ember';

export default Ember.Component.extend({
  addNewLink: true,
  actions: {
    linkFormShow() {
      this.set('addNewLink', true);
    },

    saveLink() {
      var params = {
        link: this.get('link'),
        title: this.get('title'),
        description: this.get('description')
      };
      this.set('addNewLink', false);
      this.sendAction('saveLink2', params);
    }
  }
});
