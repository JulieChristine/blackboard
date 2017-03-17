import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['date:asc'],
  sortedAnnouncements: Ember.computed.sort('announcements', 'sortBy'),

  actions:{
    update(announcement, params){
      this.sendAction('update', announcement, params);
    },
    delete(announcement){
      this.sendAction("destroyAnnouncement", announcement);
    }
  }
});
