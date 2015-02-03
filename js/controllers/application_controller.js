App.ApplicationController = Ember.Controller.extend({
  query: '',
  actions: {
    search: function() {
      var artist = this.get('query');
      console.log(artist);
    }
  }
})