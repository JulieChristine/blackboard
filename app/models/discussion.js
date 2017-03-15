import DS from 'ember-data';

export default DS.Model.extend({
author: DS.attr(),
comment: DS.attr(),
blackboard: DS.belongsTo('blackboard', {async: true})
});
