import DS from 'ember-data';

export default DS.Model.extend({

  information: DS.attr(),
  time: DS.attr(),
  creator: DS.attr()
});
