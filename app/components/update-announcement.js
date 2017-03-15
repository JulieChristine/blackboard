import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    updateForm() {
      this.set("updateForm", true);
    },

    delete(announcement) {
      if (confirm("Delete this announcement?")) {
        this.sendAction("destroyAnnouncement", announcement);
      }
    },


    update(announcement){
      var params = {
        content: this.get('content'),
        date: this.get('date'),
        author: this.get('author')
      };
      this.set("updateForm", false);
      this.sendAction("update", announcement, params);
    }
  }
});
