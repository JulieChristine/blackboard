import DS from 'ember-data';

export default DS.Model.extend({
  link: DS.attr(),
  title: DS.attr(),
  description: DS.attr()
});
