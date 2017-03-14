import Ember from 'ember';

var announcements = [{
  id: 1,
  content: "Plase code harder, or else.....",
  date: "2017-02-14",
  author: "Ian"
}, {
  id: 2,
  content: "Please eat pizza, or else.....",
  date: "2017-02-15",
  author: "Brian"
}, {
  id: 3,
  content: "Please drink tea, or else.....",
  date: "2017-02-16",
  author: "Lavine"
}];




export default Ember.Route.extend({
  model() {
    return announcements;
  },
//use this after firebase being set up
  // model() {
  //   return this.store.findAll("announcement");
  // },

  // actions:{
  //   saveAnnouncement(params){
  //   var newAnnouncement = this.store.createRecord('announcement', params);
  //   newAnnouncement.save();
  //   this.transitionTo('announcement');
  //   },
  //
  //
  //   update(announcement, params) {
  //   Object.keys(params).forEach(function(key) {
  //     if(params[key]!==undefined) {
  //       announcement.set(key,params[key]);
  //     }
  //   });
  //   announcement.save();
  //   this.transitionTo('announcement');
  //   },
  //
  //
  //   destroyAnnouncement(announcement) {
  //   announcement.destroyRecord();
  //   this.transitionTo('announcement');
  //   }
  // }
});
