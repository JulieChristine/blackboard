import DS from 'ember-data';

export default DS.Model.extend({
  link: DS.attr(),
  name: DS.attr(),
  description: DS.attr()
});
