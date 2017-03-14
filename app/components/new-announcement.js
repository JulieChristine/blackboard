import Ember from 'ember';

export default Ember.Component.extend({
  newAnnouncementForm: false,
  actions: {
    announcementFormShow(){
      this.set('newAnnouncementForm', true);
    },

    saveAnnouncement() {
      var params = {
        content: this.get("content"),
        date: this.get("date"),
        author: this.get("author")
      };
      this.set('newAnnouncementForm', false);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
