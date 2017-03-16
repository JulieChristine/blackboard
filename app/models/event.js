import DS from 'ember-data';

export default DS.Model.extend({

  description: DS.attr(),
  time: DS.attr(),
  duration:DS.attr(),
  creator: DS.attr(),
  date:DS.attr(),
  day: DS.belongsTo('day', { async: true }),
});
