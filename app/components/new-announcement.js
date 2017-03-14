import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow(){
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement() {
      var params = {
        content: this.get("content"),
        date: this.get("date")
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
