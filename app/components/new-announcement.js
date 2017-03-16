import Ember from 'ember';

export default Ember.Component.extend({
//hide the new announcement form by default
  newAnnouncementForm: false,


  actions: {
//show the new announcement form when clicking on the New button
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
      this.set('content', null);
      this.set('author', null);
      this.set("date", null);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
