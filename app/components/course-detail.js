// Julie

import Ember from 'ember';

//If we have delete button action we put it here
export default Ember.Component.extend({

  myhtml: function () {
  return new Ember.RSVP.Promise(function (resolve, reject) {
    Ember.$.ajax({
      url: '/ember-introduction.html',
      method: 'GET',
      success: function (html) {
        resolve(html);
      },
      error: function () {
        reject();
      }
    });
  });
}
});
