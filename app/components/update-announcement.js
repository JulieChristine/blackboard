import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    updateForm() {
      this.set("updateForm", true);
    },

    delete(announcement) {
      if (confirm("Are you sure you want to delete this announcement?")) {
        this.sendAction("destroyAnnouncement", announcement);
      }
    },


    update(announcement){
      var params = {
        content: this.get("content"),
        date: this.get('city'),
        author: this.get('author')
      };
      this.set("updateForm", false);
      this.sendAction("update", announcement, params);
    }
  }
});
