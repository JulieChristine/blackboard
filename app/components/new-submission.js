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
        name: this.get('name'),
        description: this.get('description'),
        rating: this.set('rating',1)
      };
      this.set('link',"");
      this.set('name',"");
      this.set('description',"");
      this.set('addNewLink', true);
      this.sendAction('saveLink', params);
    }
  }
});
