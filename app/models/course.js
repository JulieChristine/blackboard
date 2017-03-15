import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  week: DS.attr(),
  content: DS.attr(),
  toc: DS.attr()

});
