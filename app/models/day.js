import DS from 'ember-data';

export default DS.Model.extend({
  today: DS.attr(),
  events:DS.hasMany('event',{async:true})
});
